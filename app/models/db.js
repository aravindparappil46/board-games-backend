'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'remotemysql.com',
    port: '3306',
    user: 'S16nPYllpL',
    password: 'PQ1OrgRPc5',
    database: 'S16nPYllpL'
});

connection.connect(function(err) {
    if (err) throw err;
});

setInterval(function () {
	console.log("Making a query!!!");
    connection.query('SELECT 1');
}, 300000);

module.exports = connection;