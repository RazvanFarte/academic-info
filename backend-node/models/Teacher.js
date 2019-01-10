const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Teacher = new Schema({
  id: {type: Number},
  email: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  faculty: {type: String},
});

module.exports = mongoose.model('Teacher', Teacher);