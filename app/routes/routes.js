'use strict';
module.exports = function(app) {
  var userCtrl = require('../controllers/userCtrl');
  var activeSessionsCtrl = require('../controllers/activeSessionsCtrl');
  var tttMovesCtrl = require('../controllers/tttMovesCtrl');


  // Routes
  app.route('/register')
    .post(userCtrl.register);
  
  app.route('/login')
  	.post(userCtrl.login);

  app.route('/listUsers/:currUser')
    .get(userCtrl.listUsers);

  app.route('/newSession')
  	.post(activeSessionsCtrl.startNewSession);

  app.route('/deleteSession/:id')
  	.post(activeSessionsCtrl.deleteSession);

  app.route('/getAllActiveSessions/:player1')
  	.get(activeSessionsCtrl.getAllActiveSessions);

  app.route('/storeBoardState')	
  	.post(tttMovesCtrl.storeBoardState);

  app.route('/deleteTTTMoves/:id')
  	.post(tttMovesCtrl.deleteMoves);

  app.route('/getLatestBoardState/:id')	
  	.get(tttMovesCtrl.getLatestBoardState);
    
};