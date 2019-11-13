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

module.exports = tttMoves;