const mongoose = require('mongoose');
const service = require('../../utils/tokenService');
const user_model  = mongoose.model('USERMODEL');

exports.authenticate = function(req, res) {

  user_model.findOne({ user: req.body.user }, function(err, user) {
    if(err) res.send(500, err.message);
    if(!user){
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    }
    else
    {
      if(user){
        if (user.pass !== req.body.pass){
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        }
        else{
          // return the information including token as JSON
      		res.json({
        		success: true,
        		message: 'Login Success!',
        		token: service.createToken(user)
      		});
        }
      }
   }
  });
};
