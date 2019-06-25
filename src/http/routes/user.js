const express = require('express');
const router = express.Router();

const authController = require('../controllers/authenticationController');
const userController = require('../controllers/userController');
const middleware = require('../../middlewares/authMiddleware');

router.route('/authenticate')
.post(authController.authenticate);

router.route('/user')
.get(middleware.ensureAuthenticated, userController.findAll)
.post(userController.add);

module.exports = router;
