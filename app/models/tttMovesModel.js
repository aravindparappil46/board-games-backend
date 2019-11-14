'user strict';
var sql = require('./db.js');

var tttMoves = function(move) { 
	this.session_id = move.sessionId;
	this.board_state = move.boardState;	
};

tttMoves.storeBoardState = function(new_board_state, result){
	console.log("[tttMovesModel] New Board State is ", new_board_state);
	sql.query("INSERT INTO ttt_moves set ?", new_board_state, function(err, res){
		if(err){
			console.log("[tttMovesModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[tttMovesModel] Added new board state", res.insertId);
			result(null, res.insertId);
		}
	});
};

tttMoves.deleteMoves = function(session_id, result){
	console.log("[tttMovesModel] Deleting all moves with session_id =", session_id);
	sql.query("DELETE FROM ttt_moves WHERE session_id = ?", session_id, function(err, res){
		if(err){
			console.log("[tttMovesModel] Error!", err);
			result(err, null);
		}
		else{
			console.log("[tttMovesModel] Deleted every record with session_id",session_id, res.insertId);
			result(null, res.insertId);
		}
	});
};

tttMoves.getLatestBoardState = function(session_id, result){
	console.log("[tttMovesModel] Getting board for session_id =", session_id);
	sql.query("SELECT * FROM ttt_moves WHERE session_id = ? ORDER BY id DESC LIMIT 1", session_id, function(err, res){
		if(err){
			console.log("[tttMovesModel] Error!", err);
			result(err, null);
		}
		else{
			result(null, res);
		}
	});
};


module.exports = tttMoves;