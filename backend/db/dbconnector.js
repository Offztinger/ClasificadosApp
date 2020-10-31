const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clasificadosapp',
    password: ''
})

exports.connection = connection;
