const mysql = require('mysql2');


  let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123456',
    database: 'datas'
  })

module.exports = {
  db
};
