const mysql = require('mysql2');

const Sequelize = require('sequelize');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'restadmin',
    database: 'nodejsdb',
    password: 'password'
});

const sequelize = new Sequelize('nodejsdb', 'restadmin', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000,
    }

});

module.exports = pool.promise();
module.exports = sequelize;