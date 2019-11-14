'use strict';

var activeSessions = require('../models/activeSessionsModel.js');

// Registering a new session
exports.startNewSession = function (req, res) {
	console.log("{activeSessionCtrl} body", req.body);
	var new_session = new activeSessions(req.body);
	activeSessions.addSession(new_session, function(err, as){
		if(err)
			res.send(err)
		res.json(as);
	});
};

// Delete game session
exports.deleteSession = function (req, res) {
	console.log("{activeSessionCtrl} Session id = ", req.params.id);
	var session_id = req.params.id
	activeSessions.deleteSession(session_id, function(err, as){
		if(err)
			res.send(err)
		res.json(as);
	});
};

exports.getAllActiveSessions = function (req, res) {
	console.log("{activeSessionCtrl} Getting Sessions for id = ", req.params.player1);
	var player1 = req.params.player1
	activeSessions.getAllActiveSessions(player1, function(err, as){
		if(err)
			res.send(err)
		res.json(as);
	});
};
