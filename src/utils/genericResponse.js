

exports.success = (res, data) => {

    res.status(200).jsonp({status: 'SUCCESS', data: data});
};

exports.error = (res, message = 'Internal Error', data = {}) => {

    res.status(500).jsonp({status: 'ERROR', data: data, message: message});
};
