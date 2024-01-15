module.exports = class FormDAL {

    constructor(conexao){
        this.conexao = conexao;
    }
    
    FindAll(){
        return new Promise(function(resolve, reject){
            this.conexao.query('SELECT * FROM formulario ',  function(error, elements){
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    findUserEmail(camposForm) {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM formulario WHERE email_formulario = ?",
            [camposForm.email_formulario],
                function (error, elements) {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(elements);
                });
        });
    };

    findID(id) {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM formulario WHERE id_formulario = ?", [id], function (error, elements) {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(elements);
                });
        });
    };

    FindPage(pagina, total){
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT * FROM formulario limit '+ pagina + ', '+ total,  function(error, elements){
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    TotalReg(){
        return new Promise((resolve, reject)=>{
            this.conexao.query('SELECT count(*) total FROM formulario ',  function(error, elements){
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    };

    create(camposJson) {
        return new Promise((resolve, reject) => {
            this.conexao.query("insert into formulario set ?",
                camposJson,
                function (error, elements) {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(elements);
                });
        });
    }
    update(camposJson, id) {
        return new Promise((resolve, reject) => {
            this.conexao.query("UPDATE formulario SET ? WHERE id_formulario = ?",
            [camposJson, id],
            function (error, results, fields) {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
        });
    }

    // delete(id) {
    //     return new Promise((resolve, reject) => {
    //         this.conexao.query("UPDATE formulario SET id_tipo_usuario = 0 WHERE id = ?", [id], function (error, results) {
    //             if (error) {
    //                 return reject(error);
    //             }
    //             return resolve(results[0]);
    //         });
    //     });
    // }
}