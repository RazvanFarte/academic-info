const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Subject = new Schema({
  name: {type: String},
  isOptional: {type: Boolean},
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  }
});


Subject.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Subject', Subject);
