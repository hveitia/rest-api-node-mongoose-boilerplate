
const mongoose = require('mongoose');
const base_model  = mongoose.model('BASEMODEL');

//GET - Return all
exports.findAll = function(req, res) {

  base_model.find(function(err, result) {

    if(err) res.send(500, err.message);

    console.log('GET /base');
    res.status(200).jsonp(result);
  });
};

//GET - Return all obj with specified field
exports.findByField = function(req, res) {

  base_model.find({field: req.params.field}, function(err, result) {

    if(err)return res.send(500, err.message);

    res.status(200).jsonp(result);
  });
};

//POST - Insert a new obj in the DB
exports.add = function(req, res) {

  console.log('POST');
  console.log(req.body);

  const obj = new base_model({
    field:    req.body.field
  });

  obj.save(function(err, result) {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(result);
  });
};

//OPTIONS Allow CORS to DELETE
exports.options = function(req, res, next) {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
};

//PUT update obj
exports.update = function(req, res){

    base_model.findById(req.params.id, function(err, result) {

        result.field = req.body.field;

        result.save(function(err) {

            if(err) return res.send(500, err.message);

            res.status(200).jsonp(result);
      });
    });
};

//DELETE Delete obj
exports.delete = function(req, res){

  if(req.params.id === 'all'){

    base_model.remove(function(err) {

      if(err) return res.status(500).send(err.message);

      res.status(200).jsonp('OK');
    })

  }else{
    base_model.findById(req.params.id, function(err, result) {

      result.remove(function(err) {

        if(err) return res.status(500).send(err.message);

        res.status(200).jsonp('OK');
      })
    });
  }
};


