const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Appointment = new Schema({
  id: Number,
  startDate: String,
  endDate: String,
  name: String,
});

module.exports = mongoose.model('Appointment', Appointment);
