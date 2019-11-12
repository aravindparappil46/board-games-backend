'user strict';
var sql = require('./db.js');

// User Constructor
var User = function(user) { 
	this.email = user.email;
	this.password = user.password;
	this.firstName = user.firstname;
	this.lastName = user.lastname;
};

// Registering new user
User.register = function(new_user, result){
	console.log("[UserModel] New User is ", new_user);
	sql.query("INSERT INTO users set ?", new_user, function(err, res){
		if(err){
			console.log("[UserModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[UserModel] Added new user", res.insertId);
			result(null, res.insertId);
		}
	});
};
module.exports = User;