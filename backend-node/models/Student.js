const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Student = new Schema({
  id: {type: Number},
  email: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  faculty: {type: String},
  group: {type: String},
  year: {type: Number},
  subgroup: {type: Number}
});

module.exports = mongoose.model('Student', Student);