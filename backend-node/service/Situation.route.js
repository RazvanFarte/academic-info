const express = require('express');
const app = express();
const situationRoutes = express.Router();

let Situation = require('../models/Situation');
let Subject = require('../models/Subject');

situationRoutes.route('/add').post(function (req, res) {
    let situation = new Situation(req.body);

    Subject.findById(situation.student, function (error) {
        if(error)
            res.status(500).send("No student with that ID");
        else
            situation.save()
                .then(data => {res.status(200).json(data)})
                .catch(err => {res.status(500).send('Unable to save to database' + err)})
    });
});

situationRoutes.route('/')
    .get(function (req, res) {
        Situation.find()
            .populate('student')
            .populate('appointment')
            .exec(function (error, situations) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(situations);
                }
            });
    });

situationRoutes.route('/update/:id')
    .put(function (req, res) {
        let id = req.params.id;
        Situation.findByIdAndUpdate({_id:id}, req.body, {new: false}, function (err, situation) {
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
    });

situationRoutes.route('/delete/:id').delete(function(req, res) {
    Situation.findByIdAndRemove({_id: req.params.id}, function (err, situation) {
        if(err) res.status(500).json("Error");
        else res.json(situation);
    });
});

situationRoutes.route('/deleteAll').delete(function(req, res) {
    Situation.remove({}, function (err, situation) {
        if(err) res.status(500).json("Error");
        else res.json(situation);
    });
});

situationRoutes.route('/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Situation.find({_id: id}, function (err) {
            if(err)
                console.log(err);
        }).populate('student')
            .populate('appointment')
            .exec(function (error, situations) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(situations);
                }
            });
    });




module.exports = situationRoutes;
