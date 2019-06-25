const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');

//Import Models
require('../models/baseModel')(app, mongoose);
require('../models/userModel')(app, mongoose);

  router.get('/health', function(req, res) {
     res.send(" UP!");
  });


module.exports = router;
