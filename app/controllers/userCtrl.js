'use strict';

var User = require('../models/userModel.js');

// Registering a new user
exports.register = function (req, res) {
	console.log("{UserCtrl} body", req.body);
	var new_user = new User(req.body);
	User.register(new_user, function(err, user){
		if(err)
			res.send(err)
		res.json(user);
	});
};

 // Login with valid creds
 exports.login = function(req, res) {
 	console.log("[UserCtrl] Trying to login with", req.body);
 	var login = new User(req.body);
 	User.login(login, function(err, login){
 		if(err)
 			res.send(err);
 		else
 			res.json(login);
 	});
 }

 // List all registered users
 exports.listUsers = function(req, res) {
 	console.log("[UserCtrl] Fetching all registered users", req.params.currUser);
 	User.listUsers(req.params.currUser, function(err, users){
 		if(err)
 			res.send(err);
 		else
 			res.json(users);
 	});
 }



