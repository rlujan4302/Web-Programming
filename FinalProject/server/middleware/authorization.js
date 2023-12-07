const users = require('../models/users');
//Want to add map so if I end up forgetting thats why I have adress still in users
module.exports = {//Taken from class to add need to login
    requireUser(adminOnly = false){
        return function(req, res, next) {
          if (!req.user) {
            return next({
              status: 401,
              message: 'You must be logged in to perform this action.'
            });
          }
          if (adminOnly && !req.user.admin) {
            return next({
              status: 403,
              message: 'You must be an admin to perform this action.'
            });
          }
          next();
        }
    },
}