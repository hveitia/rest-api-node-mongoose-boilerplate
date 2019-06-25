require('dotenv').config();
const jwt = require('jwt-simple');
const moment = require('moment/moment');


exports.ensureAuthenticated = function(req, res, next) {
   if(!req.headers.authorization) {
      return res.status(403).send({message: "Error: Access Denied"});
   }

   const token = req.headers.authorization;
   const payload = jwt.decode(token, process.env.TOKEN_SECRET, true, 'HS256');

   if(payload.exp <= moment().unix()) {
   return res
   .status(401)
   .send({message: "The token expires"});
   }

   req.user = payload.sub;
   next();
  };
