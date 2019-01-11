const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Teacher = new Schema({
  email: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  faculty: {type: String},
});

Teacher.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Teacher', Teacher);