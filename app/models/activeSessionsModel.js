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

activeSessions.deleteSession = function(session_id, result){
	console.log("[ActiveSessionModel] Deleting session_id =", session_id);
	sql.query("DELETE FROM active_sessions WHERE id = ?", session_id, function(err, res){
		if(err){
			console.log("[ActiveSessionModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[ActiveSessionModel] Deleted record with session_id",session_id);
			result(null, res.insertId);
		}
	});
};

activeSessions.getAllActiveSessions = function(player1, result){
	console.log("[ActiveSessionModel] Sessions for player1 =", player1);
	var query = sql.query("SELECT * FROM active_sessions WHERE player_1 = ? OR player_2 = ?", [player1,player1], function(err, res){
		if(err){
			console.log("[ActiveSessionModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[ActiveSessionModel] player1 plays ",res);
			result(null, res);
		}
	});
	console.log(query.sql);
};



module.exports = activeSessions;