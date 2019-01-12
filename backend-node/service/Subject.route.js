const express = require('express');
const Promise = require('bluebird');
const app = express();
const subjectRoutes = express.Router();

let Subject = require('../models/Subject');
let Teacher = require('../models/Teacher');

subjectRoutes.route('/add').post(function (req, res) {
    let subject = new Subject(req.body);
    subject.teacher = req.body.teacher.id;


    subject.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).send('Unable to save to database' + err)
        })
});

function* getResponse() {
    const r = yield new Promise(resolve => Teacher.findById(subject.teacher).exec((t,e) => {
        subject.teacher = t;
    });
    return r;
}

subjectRoutes.route('/')
    .get(function (req, res) {
        Subject.find()
            .populate('subject')
            .exec(function (error, subjects) {
                if (error) {
                    console.log(error);
                } else {
                    var newSubjects = [];
                    subjects.forEach(subject => {
                        Teacher.findById(subject.teacher).exec(t => {
                            subject.teacher = t;
                            newSubjects.push(subject);
                            console.log('got one')
                        }, error => { console.log(error)
                        }, () => {
                            console.log(newSubjects);
                            res.json(newSubjects);
                        });
                    });


                }
            });
    });

subjectRoutes.route('/update/:id')
    .put(function (req, res) {
        let id = req.params.id;
        Subject.findByIdAndUpdate({_id: id}, req.body, {new: false}, function (err, subject) {
            if (err) {
                conole.log(err);
            } else {
                if (!subject) {
                    res.status(404).json("Subject with id not found");
                } else {
                    res.status(200).json(subject);
                }
            }
        })
    });

subjectRoutes.route('/delete/:id').delete(function (req, res) {
    Subject.findByIdAndRemove({_id: req.params.id}, function (err, subject) {
        if (err) res.status(500).json("Error");
        else res.json(subject);
    });
});

subjectRoutes.route('/deleteAll').delete(function (req, res) {
    Subject.remove({}, function (err, subject) {
        if (err) res.status(500).json("Error");
        else res.json(subject);
    });
});

subjectRoutes.route('/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Subject.find({_id: id}, function (err) {
            if (err)
                console.log(err);
        }).populate('subject')
            .exec(function (error, subjects) {
                if (error) {
                    console.log(error);
                } else {
                    res.json(subjects);
                }
            });
    });

subjectRoutes.route('/subject/:subjectId')
    .get(function (req, res) {
        let subjectId = req.params.subjectId;
        Subject.find({subject: subjectId}, function (err, subjects) {
            if (err) {
                console.log(err);
            } else {
                res.json(subjects);
            }
        });
    });


module.exports = subjectRoutes;
