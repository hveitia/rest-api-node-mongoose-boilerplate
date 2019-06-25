const express = require('express');
const router = express.Router();

// Import Controllers
const baseController = require('../controllers/baseController');
const middleware = require('../../middlewares/authMiddleware');

router.route('/base')
  .get(baseController.findAll)
  .post(baseController.add);

router.route('/base/:id')
  .put(baseController.update)
  .options(baseController.options)
  .delete(baseController.delete);

router.route('/base/:field')
  .get(baseController.findByField);


module.exports = router;
