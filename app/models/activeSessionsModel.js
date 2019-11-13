'user strict';
var sql = require('./db.js');

var activeSessions = function(as) { 
	this.player_1 = as.player1;
	this.player_2 = as.player2;	
	this.game_id = as.gameId;
};

// Add new session
activeSessions.addSession = function(new_session, result){
	console.log("[ActiveSessionModel] New Session is ", new_session);
	sql.query("INSERT INTO active_sessions set ?", new_session, function(err, res){
		if(err){
			console.log("[ActiveSessionModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[ActiveSessionModel] Added new session", res.insertId);
			result(null, res.insertId);
		}
	});
};

module.exports = activeSessions;