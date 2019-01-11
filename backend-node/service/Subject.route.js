const express = require('express');
const app = express();
const subjectRoutes = express.Router();

let Subject = require('../models/Subject');
let Teacher = require('../models/Teacher');

subjectRoutes.route('/add').post(function (req, res) {
  let subject = new Subject(req.body);

  Teacher.findById(subject.teacher, function (error) {
      if(error)
          res.status(500).send("No teacher with that ID");
      else
          subject.save()
              .then(data => {res.status(200).json(data)})
              .catch(err => {res.status(500).send('Unable to save to database' + err)})
  });
});

subjectRoutes.route('/')
  .get(function (req, res) {
     Subject.find()
         .populate('teacher')
         .exec(function (error, subjects) {
             if(error) {
                 console.log(error);
             } else {
                 res.json(subjects);
             }
         });
  });

subjectRoutes.route('/update/:id')
  .put(function (req, res) {
    let id = req.params.id;
    Subject.findByIdAndUpdate({_id:id}, req.body, {new: false}, function (err, subject) {
      if(err) {
        conole.log(err);
      } else {
        if(!subject) {
          res.status(404).json("Subject with id not found");
        } else {
          res.status(200).json(subject);
        }
      }
    })
  });

subjectRoutes.route('/delete/:id').delete(function(req, res) {
  Subject.findByIdAndRemove({_id: req.params.id}, function (err, subject) {
    if(err) res.status(500).json("Error");
    else res.json(subject);
  });
});

subjectRoutes.route('/deleteAll').delete(function(req, res) {
    Subject.remove({}, function (err, subject) {
        if(err) res.status(500).json("Error");
        else res.json(subject);
    });
});

subjectRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Subject.find({_id: id}, function (err) {
      if(err)
        console.log(err);
    }).populate('teacher')
        .exec(function (error, subjects) {
            if(error) {
                console.log(error);
            } else {
                res.json(subjects);
            }
    });
});

subjectRoutes.route('/teacher/:teacherId')
    .get(function (req, res) {
        let teacherId = req.params.teacherId;
        Subject.find({teacher: teacherId}, function (err, subjects) {
            if(err) {
                console.log(err);
            } else {
                res.json(subjects);
            }
        });
    });



module.exports = subjectRoutes;
