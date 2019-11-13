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
};

