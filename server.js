// Starting point of the NodeJS backend!!

const express = require('express'),
app = express(),
port = 52112 //process.env.PORT || 3000;
bodyParser = require('body-parser');

const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json()); // supports JSON encoded bodies for POST
app.use(express.urlencoded()); // supports URL encoded bodies
app.use(cors({credentials: true, origin: true}))

var routes = require('./app/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);
console.log("[BoardGames] NodeJS Server started on: " + port);

