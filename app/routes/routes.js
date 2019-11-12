'use strict';
module.exports = function(app) {
  var userCtrl = require('../controllers/userCtrl');

  // Routes
  app.route('/register')
    .post(userCtrl.register);
  
  app.route('/login')
  	.post(userCtrl.login);
    
};