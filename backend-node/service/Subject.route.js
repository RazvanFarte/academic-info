const express = require('express');
const app = express();
const subjectRoutes = express.Router();

let Subject = require('../models/Subject');

subjectRoutes.route('/add').post(function (req, res) {
  let subject = new Subject(req.body);
  subject.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

subjectRoutes.route('/')
  .get(function (req, res) {
     Subject.find(function (err, subjects) {
       if(err) {
         console.log(err);
       } else {
         res.json(subjects);
       }
     })
  });

subjectRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Subject.update({id:id}, req.body, function (err, subject) {
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
    res.send("Not yet implemented");
  });

subjectRoutes.route('/delete/:id').delete(function(req, res) {
  Subject.find({id: req.params.id}, function (err, subject) {
    if(err) res.status(500).json("Error");
    else res.json(subject);
  }).remove().exec()
});

subjectRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Subject.find({id: id}, function (err, subject) {
      if(err) {
        console.log(err);
      } else {
        res.json(subject);
      }
    });
});


module.exports = subjectRoutes;
