

const mongoose = require('mongoose'); //MONGOOSE

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  email: { type: String, required: true, minlength: 5, maxlength: 255, unique: true },
  password: { type: String, required: true, minlength: 5, maxlength: 1024 },
  avatar:{type:String},
  date:{type:Date,default:Date.now }

});


const User =  mongoose.model('users', userSchema); //MONGOOSE
module.exports = User;

// module.exports = mongoose.model('users', userSchema);