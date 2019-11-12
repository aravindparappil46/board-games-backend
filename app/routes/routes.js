'use strict';
module.exports = function(app) {
  var userMgmt = require('../controllers/userCtrl');

  // Routes
  app.route('/register')
    .post(userMgmt.register);
 
    
};