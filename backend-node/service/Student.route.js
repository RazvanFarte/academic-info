const express = require('express');
const app = express();
const studentRoutes = express.Router();

let Student = require('../models/Student');

studentRoutes.route('/add').post(function (req, res) {
  let student = new Student(req.body);
  student.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

studentRoutes.route('/')
  .get(function (req, res) {
     Student.find(function (err, students) {
       if(err) {
         console.log(err);
       } else {
         res.json(students);
       }
     })
  });

studentRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Student.update({_id:id}, req.body, function (err, student) {
      if(err) {
        conole.log(err);
      } else {
        if(!student) {
          res.status(404).json("Student with id not found");
        } else {
          res.status(200).json(student);
        }
      }
    })
    res.send("Not yet implemented");
  });

studentRoutes.route('/delete/:id').delete(function(req, res) {
  Student.find({_id: req.params.id}, function (err, student) {
    if(err) res.status(500).json("Error");
    else res.json(student);
  }).remove().exec()
});

studentRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Student.find({_id: id}, function (err, student) {
      if(err) {
        console.log(err);
      } else {
        res.json(student);
      }
    });
});


module.exports = studentRoutes;
