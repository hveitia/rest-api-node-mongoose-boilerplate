const mongoose = require('mongoose');
const user_model  = mongoose.model('USERMODEL');


exports.add = async (req) => {

    const obj = new user_model({
        name:    req.body.name,
        pass:    req.body.pass,
        email:   req.body.email,
        rol:     req.body.rol
    });

    return await obj.save();

};

exports.findAll = async () => {

    return await user_model.find();
};
