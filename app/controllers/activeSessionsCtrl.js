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

