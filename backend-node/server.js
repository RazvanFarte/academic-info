const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  passport = require('passport'),
  Strategy = require('passport-http-bearer').Strategy,
  mongoose = require('mongoose'),
  jwt = require('jwt'),
  config = require('./config/DB'),
  student = require('./service/Student.route'),
  teacher = require('./service/Teacher.route'),
  subject = require('./service/Subject.route'),
  meeting = require('./service/Meeting.route'),
  appointment = require('./service/Appointment.route'),
  situation = require('./service/Situation.route');

const User = require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
// app.use(bodyParser.json());
// app.use(cors());

passport.use(new Strategy(
    function(token, done) {
      User.findOne({ token: token }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
      });
    }
));

// app.post('/register', (req, res) => {
//         User.find({email: req.body.email}, (
//             (error, user) => {
//                 if(error)
//                     res.send("Error during registration");
//                 else
//                     if(user)
//                         res.send("User with email already exists");
//                     else {
//                         let user = new User({
//                             email: req.body.email,
//                             password: 12345678,
//                             token: null,
//                             creationDate: Date.now()
//                         }).save().then(user => "Check you inbox for the password");
//                     }
//
//             }
//         ));
//     }
//     );
//
// app.post('/login', (req, res) => {
//  User.find({email: req.body.email}, (error, user) => {
//      if(error)
//          res.send("Error during login");
//      else
//          if(!user)
//              res.end("No such user with email");
//          else
//              if(user.password !== req.body.password)
//                  res.send("Password mismatch");
//              else {
//                  if()
//              }
//  })
// });


app.use('/api',
    passport.authenticate('bearer', { session: false }),
    function(req, res, next) {
        res.json({ username: req.user.username, email: req.user.emails[0].value });
    });

app.use('/api/student', student);
app.use('/api/teacher', teacher);
app.use('/api/subject', subject);
app.use('/api/situation', situation);
app.use('/api/appointment', appointment);
app.use('/api/meeting', meeting);


app.get('/home', function (req,res) {
  console.log('hello');
  res.send("OK");
});


const port = process.env.PORT || 4201;
app.set('port', port);
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
