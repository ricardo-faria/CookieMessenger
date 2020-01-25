let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserModel;

var userSchema = new Schema({
  name:  String,
  email: String,
  password: String, 
  registred_at: Date,
});

UserModel = mongoose.model('user', userSchema);


module.exports = UserModel;