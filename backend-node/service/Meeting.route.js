const express = require('express');
const app = express();
const meetingRoutes = express.Router();

let Meeting = require('../models/Meeting');

meetingRoutes.route('/add').post(function (req, res) {
  let meeting = new Meeting(req.body);
  meeting.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

meetingRoutes.route('/')
  .get(function (req, res) {
     Meeting.find(function (err, meetings) {
       if(err) {
         console.log(err);
       } else {
         res.json(meetings);
       }
     })
  });

meetingRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Meeting.update({_id:id}, req.body, function (err, meeting) {
      if(err) {
        conole.log(err);
      } else {
        if(!meeting) {
          res.status(404).json("Meeting with id not found");
        } else {
          res.status(200).json(meeting);
        }
      }
    })
    res.send("Not yet implemented");
  });

meetingRoutes.route('/delete/:id').delete(function(req, res) {
  Meeting.find({_id: req.params.id}, function (err, meeting) {
    if(err) res.status(500).json("Error");
    else res.json(meeting);
  }).remove().exec()
});

meetingRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Meeting.find({_id: id}, function (err, meeting) {
      if(err) {
        console.log(err);
      } else {
        res.json(meeting);
      }
    });
});


module.exports = meetingRoutes;
