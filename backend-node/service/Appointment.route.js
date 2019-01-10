const express = require('express');
const app = express();
const appointmentRoutes = express.Router();

let Appointment = require('../models/Appointment');

appointmentRoutes.route('/add').post(function (req, res) {
  let appointment = new Appointment(req.body);
  appointment.save()
    .then(data => {res.status(200).json(data)})
    .catch(err => {res.status(500).send('Unable to save to database' + err)})
});

appointmentRoutes.route('/')
  .get(function (req, res) {
     Appointment.find(function (err, appointments) {
       if(err) {
         console.log(err);
       } else {
         res.json(appointments);
       }
     })
  });

appointmentRoutes.route('/update/:id') //TODO FIX
  .put(function (req, res) {
    let id = req.params.id;
    Appointment.update({id:id}, req.body, function (err, appointment) {
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
    res.send("Not yet implemented");
  });

appointmentRoutes.route('/delete/:id').delete(function(req, res) {
  Appointment.find({id: req.params.id}, function (err, appointment) {
    if(err) res.status(500).json("Error");
    else res.json(appointment);
  }).remove().exec()
});

appointmentRoutes.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    Appointment.find({id: id}, function (err, appointment) {
      if(err) {
        console.log(err);
      } else {
        res.json(appointment);
      }
    });
});


module.exports = appointmentRoutes;
