const express = require('express');
const app = express();
const situationRoutes = express.Router();

let Situation = require('../models/Situation');

situationRoutes.route('/add').post(function (req, res) {
  let situation = new Situation(req.body);
  situation.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

situationRoutes.route('/')
  .get(function (req, res) {
     Situation.find(function (err, situations) {
       if(err) {
         console.log(err);
       } else {
         res.json(situations);
       }
     })
  });

situationRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Situation.update({_id:id}, req.body, function (err, situation) {
      if(err) {
        conole.log(err);
      } else {
        if(!situation) {
          res.status(404).json("Situation with id not found");
        } else {
          res.status(200).json(situation);
        }
      }
    })
    res.send("Not yet implemented");
  });

situationRoutes.route('/delete/:id').delete(function(req, res) {
  Situation.find({_id: req.params.id}, function (err, situation) {
    if(err) res.status(500).json("Error");
    else res.json(situation);
  }).remove().exec()
});

situationRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Situation.find({_id: id}, function (err, situation) {
      if(err) {
        console.log(err);
      } else {
        res.json(situation);
      }
    });
});

//TODO To be tested
situationRoutes.route('student/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Situation.find({student_id: id}, function (err, situation) {
            if(err) {
                console.log(err);
            } else {
                res.json(situation);
            }
        });
    });

situationRoutes.route('teacher/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Situation.find({teacher_id: id}, function (err, situation) {
            if(err) {
                console.log(err);
            } else {
                res.json(situation);
            }
        });
    });


module.exports = situationRoutes;
