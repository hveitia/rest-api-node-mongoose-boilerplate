exports = module.exports = function(app, mongoose) {

  const baseSchema = new mongoose.Schema({
    field:    { type: String }
  });

  mongoose.model('BASEMODEL', baseSchema);

};
