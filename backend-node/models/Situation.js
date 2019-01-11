const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Situation = new Schema({
  isPresent: Boolean,
  grade: Number,
  appointment: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  student: {
    type: Schema.Types.ObjectId,
      ref: 'Student'
},
  updated: Boolean,
});

Situation.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Situation', Situation);
