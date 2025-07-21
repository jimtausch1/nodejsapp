const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'restadmin',
    database: 'nodejsdb',
    password: 'password'
});

module.exports = pool.promise();