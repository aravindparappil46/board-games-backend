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
			console.log("[UserModel] Added new user with ID", res.insertId);
			result(null, res.insertId);
		}
	});
};

// Login with valid creds
User.login = function(login, result){
	sql.query("SELECT * FROM users WHERE email = ? AND password = ?", [login.email, login.password], function(err, res){
		if(err){
			console.log("[UserModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[UserModel] Found User!", res);
			result(null, res);
		}
	});
};

User.listUsers = function(currUser, result){
	sql.query("SELECT * FROM users WHERE email <> 'ai@ai.com' AND email <> ? ", currUser, function(err, res){
		if(err){
			console.log("[UserModel] Error!", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
}

module.exports = User;