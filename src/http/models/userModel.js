exports = module.exports = function(app, mongoose) {

  const userSchema = new mongoose.Schema({
    name:  { type: String },
    pass:  { type: String},
    email: { type: String},
    rol:   { type: String}
  });

  mongoose.model('USERMODEL', userSchema);

};
