const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: false
  },
  password: {
    type: String,
  },
  verificationToken:{
    type: String
  },
  isVerified: { 
    type: Boolean, 
    default: false
   }, 
  myFile : String
});

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
