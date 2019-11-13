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

  app.route('/newSession')
  	.post(activeSessionsCtrl.startNewSession);

  app.route('/storeBoardState')	
  	.post(tttMovesCtrl.storeBoardState);
    
};