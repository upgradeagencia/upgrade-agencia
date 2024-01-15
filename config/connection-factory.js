const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
       host: "viaduct.proxy.rlwy.net",
        user: "root",
        password: "baBbe23-De1ghF-c--266aa51fB43FDF",
        database: "railway",
        port: "11746"
    });

};
