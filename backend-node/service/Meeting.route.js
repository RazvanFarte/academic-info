const express = require('express');
const app = express();
const meetingRoutes = express.Router();

let Meeting = require('../models/Meeting');
let Subject = require('../models/Subject');

meetingRoutes.route('/add').post(function (req, res) {
    let meeting = new Meeting(req.body);

    Subject.findById(meeting.subject, function (error) {
        if(error)
            res.status(500).send("No subject with that ID");
        else {
            meeting.save()
                .then(data => {res.status(200).json(data)})
                .catch(err => {res.status(500).send('Unable to save to database' + err)})
        }
    });
});

meetingRoutes.route('/')
    .get(function (req, res) {
        Meeting.find()
            .populate('subject')
            .populate('teachers')
            .exec(function (error, meetings) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(meetings);
                }
            });
    });

meetingRoutes.route('/update/:id')
    .put(function (req, res) {
        let id = req.params.id;
        Meeting.findByIdAndUpdate({_id:id}, req.body, {new: false}, function (err, meeting) {
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
    });

meetingRoutes.route('/delete/:id').delete(function(req, res) {
    Meeting.findByIdAndRemove({_id: req.params.id}, function (err, meeting) {
        if(err) res.status(500).json("Error");
        else res.json(meeting);
    });
});

meetingRoutes.route('/deleteAll').delete(function(req, res) {
    Meeting.remove({}, function (err, meeting) {
        if(err) res.status(500).json("Error");
        else res.json(meeting);
    });
});

meetingRoutes.route('/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Meeting.find({_id: id}, function (err) {
            if(err)
                console.log(err);
        }).populate('subject')
            .populate('teachers')
            .exec(function (error, meetings) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(meetings);
                }
            });
    });



module.exports = meetingRoutes;
