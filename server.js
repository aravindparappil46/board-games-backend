// Starting point of the NodeJS backend!!

const express = require('express'),
app = express(),
port = process.env.PORT || 3000;
bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');

const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'remotemysql.com',
    port: '3306',
    user: 'S16nPYllpL',
    password: 'PQ1OrgRPc5',
    database: 'S16nPYllpL'
});
mc.connect();

setInterval(function () {
	console.log("Making a query!!! Server.js");
    mc.query('SELECT 1');
}, 300000);

const cors = require('cors')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json()); // supports JSON encoded bodies for POST
app.use(express.urlencoded()); // supports URL encoded bodies
app.use(cors())

var routes = require('./app/routes/routes'); //importing route
routes(app); //register the route

//app.listen(port);
//console.log("[BoardGames] NodeJS Server started on: " + port);

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log("[BoardGames] HTTPS NodeJS Server started on: " + port);
});
