'use strict';

var tttMoves = require('../models/tttMovesModel.js');


exports.storeBoardState = function (req, res) {
	console.log("{tttMovesCtrl} body", req.body);
	var new_board_state = new tttMoves(req.body);
	tttMoves.storeBoardState(new_board_state, function(err, as){
		if(err)
			res.send(err)
		res.json(as);
	});
}

exports.deleteMoves = function (req, res) {
	var session_id_to_delete = parseInt(req.params.id);
	tttMoves.deleteMoves(session_id_to_delete, function(err, done){
		if(err)
			res.send(err)
		res.json(done);
	});
}

exports.getLatestBoardState = function (req, res) {
	var session_id = parseInt(req.params.id);
	tttMoves.getLatestBoardState(session_id, function(err, bs){
		if(err)
			res.send(err)
		res.json(bs);
	});
}
