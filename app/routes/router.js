var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);


const multer = require('multer');
const path = require('path');
// ****************** Versão com armazenamento em diretório
// Definindo o diretório de armazenamento das imagens
var storagePasta = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './app/public/img/uploud/') // diretório de destino  
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    //renomeando o arquivo para evitar duplicidade de nomes
  }
})

var upload = multer({ storage: storagePasta });


var fabricaDeConexao = require("../../config/connection-factory");
var conexao = fabricaDeConexao();


var { verificarUsuAutenticado, limparSessao, gravarUsuAutenticado, verificarUsuAutorizado } = require("../models/autenticador_middleware");
var { verificarUsuAutenticadoCliente, gravarUsuAutenticadoCliente, verificarUsuAutorizadoCliente } = require("../models/autenticador_middleware_cliente");


var UsuarioDAL = require("../models/UsuarioDAL");
var usuarioDAL = new UsuarioDAL(conexao);

var ClienteDAL = require("../models/ClienteDAL");
var clienteDAL = new ClienteDAL(conexao);

var FormDAL = require("../models/FormDAL");
var formDAL = new FormDAL(conexao);

const { body, validationResult } = require("express-validator");

router.get("/", function(req, res){
    res.render("pages/index", {autenticado: req.session.autenticado})
})

// acão do formulario

router.post("/enviarform", async function(req, res){
  var dadosForm = {
    nome_formulario: req.body.nome,
    telefone_formulario: req.body.telefone,
    email_formulario: req.body.email,
    assunto_formulario: req.body.assunto
  };
  try {
    let insert = await formDAL.create(dadosForm);
    console.log(insert);
    res.redirect("/");
  } catch {
    res.redirect("/")
  }

})

module.exports = router