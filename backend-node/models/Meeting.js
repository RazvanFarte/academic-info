const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Meeting = new Schema({
  id: {type: Number},
  type: {type: String},
  attendanceRequired: {type: Boolean},
  subject_id: {type: Number},
  teachers: {type: [Number]},
});

module.exports = mongoose.model('Meeting', Meeting);
