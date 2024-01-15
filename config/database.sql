create database upgrade;

use upgrade;
create table formulario (
	id_formulario int auto_increment primary key not null,
    nome_formulario varchar(125),
    telefone_formulario varchar(55),
    email_formulario  varchar(55),
    assunto_formulario varchar(255)
);