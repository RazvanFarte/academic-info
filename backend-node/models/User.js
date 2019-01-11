const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
   email: {
       type: String,
       unique: true,
       lowercase: true,
       trim: true,
       required: 'email address is required',
   },
   password: String,
   token: {type: Number, required: true},
   creationDate: Date
});

module.exports = mongoose.model('User', User);