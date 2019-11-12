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
