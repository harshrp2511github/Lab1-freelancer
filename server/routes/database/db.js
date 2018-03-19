const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit: 500,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'table_2'
});


module.exports = connection;