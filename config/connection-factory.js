const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
       host: "127.0.0.1",
        user: "root",
        password: "@ITB123456",
        database: "upgrade",
        port: "3306"
    });

};
