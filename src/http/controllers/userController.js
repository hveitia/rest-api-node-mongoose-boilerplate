const genericResponse = require('../../utils/genericResponse');
const userService = require('../services/userService');

exports.findAll = async (req, res) => {

  const result = await userService.findAll();

  genericResponse.success(res, result);

};

exports.add = async (req, res) =>{

  const result = await userService.addUser(req);

  genericResponse.success(res, result);

};
