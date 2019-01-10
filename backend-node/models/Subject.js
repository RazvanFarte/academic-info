const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Subject = new Schema({
  id: {type: Number},
  name: {type: String},
  isOptional: {type: Boolean},
  teacher_id: {type: Number}
});

module.exports = mongoose.model('Subject', Subject);
