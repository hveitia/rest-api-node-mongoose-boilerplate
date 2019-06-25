const userRepository = require('../repositories/userRepositoty');


exports.addUser = async (req) => {

    return await userRepository.add(req)

};

exports.findAll = async () => {

    return await userRepository.findAll();
};
