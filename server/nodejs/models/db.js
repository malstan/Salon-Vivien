/**
 * connecting to database
 * @type {{createConnection?: function((Object|string)): Connection, createPool?: function((Object|string)): Pool, createPoolCluster?: function(Object=): PoolCluster, createQuery?: function(string, Array=, Function=): Query, escape?: function(*, boolean=, string=): string, escapeId?: function(*, boolean=): string, format?: function(string, Array=, boolean=, string=): string, raw?: function(string): *, Types?: *}}
 */

const mysql = require('mysql');
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if (error) throw error;
});

module.exports = connection;