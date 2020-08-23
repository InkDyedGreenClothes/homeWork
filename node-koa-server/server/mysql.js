const mysql = require('mysql2');

let db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'my_project'
})

module.exports = db;
