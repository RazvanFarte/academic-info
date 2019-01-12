const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Appointment = new Schema({
  weekNumber: Number,
  gradePercentage: Number,
  attendanceRequired: Boolean,
  isGradable: Boolean,
  meeting: {
    type: Schema.Types.ObjectId,
    ref: 'Meeting'
  },
  responsibleTeacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
});

Appointment.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Appointment', Appointment);
