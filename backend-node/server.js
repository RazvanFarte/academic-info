const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB'),
  student = require('./service/Student.route'),
  teacher = require('./service/Teacher.route'),
  subject = require('./service/Subject.route'),
  meeting = require('./service/Meeting.route'),
  appointment = require('./service/Appointment.route'),
  situation = require('./service/Situation.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/student', student);
app.use('/teacher', teacher);
app.use('/subject', subject);
app.use('/situation', situation);
app.use('/appointment', appointment);
app.use('/meeting', meeting);


app.get('/home', function (req,res) {
  console.log('hello');
  res.send("OK");
});


const port = process.env.PORT || 4201;
app.set('port', port);
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
