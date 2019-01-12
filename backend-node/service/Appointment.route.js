const express = require('express');
const app = express();
const appointmentRoutes = express.Router();

let Appointment = require('../models/Appointment');
let Subject = require('../models/Subject');

appointmentRoutes.route('/add').post(function (req, res) {
    let appointment = new Appointment(req.body);

    Subject.findById(appointment.meeting, function (error) {
        if(error)
            res.status(500).send("No meeting with that ID");
        else
            appointment.save()
                .then(data => {res.status(200).json(data)})
                .catch(err => {res.status(500).send('Unable to save to database' + err)})
    });
});

appointmentRoutes.route('/')
    .get(function (req, res) {
        Appointment.find()
            .populate('meeting')
            .populate('responsibleTeacher')
            .exec(function (error, appointments) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(appointments);
                }
            });
    });

appointmentRoutes.route('/update/:id')
    .put(function (req, res) {
        let id = req.params.id;
        Appointment.findByIdAndUpdate({_id:id}, req.body, {new: false}, function (err, appointment) {
            if(err) {
                conole.log(err);
            } else {
                if(!appointment) {
                    res.status(404).json("Appointment with id not found");
                } else {
                    res.status(200).json(appointment);
                }
            }
        })
    });

appointmentRoutes.route('/delete/:id').delete(function(req, res) {
    Appointment.findByIdAndRemove({_id: req.params.id}, function (err, appointment) {
        if(err) res.status(500).json("Error");
        else res.json(appointment);
    });
});

appointmentRoutes.route('/deleteAll').delete(function(req, res) {
    Appointment.remove({}, function (err, appointment) {
        if(err) res.status(500).json("Error");
        else res.json(appointment);
    });
});

appointmentRoutes.route('/:id')
    .get(function (req, res) {
        let id = req.params.id;
        Appointment.find({_id: id}, function (err) {
            if(err)
                console.log(err);
        }).populate('meeting')
            .populate('responsibleTeacher')
            .exec(function (error, appointments) {
                if(error) {
                    console.log(error);
                } else {
                    res.json(appointments);
                }
            });
    });



module.exports = appointmentRoutes;
