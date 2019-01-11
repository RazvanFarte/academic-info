const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Meeting = new Schema({
  type: {type: String},
  subject: {
    type: Schema.Types.ObjectId,
      ref: 'Subject'
  },
  teachers: {
      type: [{
          type: Schema.Types.ObjectId,
          ref: 'Teacher'
      }],
  }
});

Meeting.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

module.exports = mongoose.model('Meeting', Meeting);
