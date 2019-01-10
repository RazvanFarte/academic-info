const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Situation = new Schema({
  id: {type: Number},
  weekNumber: {type: Number},
  isPresent: {type: Boolean},
  isGradable: {type: Boolean},
  grade: {type: Number},
  gradePercentage: {type: Number},
  meeting_id: {type: Number},
  student_id: {type: Number},
  teacher_id: {type: Number},
});


module.exports = mongoose.model('Situation', Situation);
