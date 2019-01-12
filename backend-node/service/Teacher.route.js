const express = require('express');
const app = express();
const teacherRoutes = express.Router();

let Teacher = require('../models/Teacher');

teacherRoutes.route('/add').post(function (req, res) {
  let teacher = new Teacher(req.body);
  teacher.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

teacherRoutes.route('/')
  .get(function (req, res) {
     Teacher.find(function (err, teachers) {
       if(err) {
         console.log(err);
       } else {
         res.json(teachers);
       }
     })
  });

teacherRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Teacher.update({_id:id}, req.body, function (err, teacher) {
      if(err) {
        conole.log(err);
      } else {
        if(!teacher) {
          res.status(404).json("Teacher with id not found");
        } else {
          res.status(200).json(teacher);
        }
      }
    })
    res.send("Not yet implemented");
  });

teacherRoutes.route('/delete/:id').delete(function(req, res) {
  Teacher.find({_id: req.params.id}, function (err, teacher) {
    if(err) res.status(500).json("Error");
    else res.json(teacher);
  }).remove().exec()
});

teacherRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Teacher.find({_id: id}, function (err, teacher) {
      if(err) {
        console.log(err);
      } else {
        res.json(teacher);
      }
    });
});


module.exports = teacherRoutes;
