/* eslint-disable prettier/prettier */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const keys = require("../../config/keys");
const passport = require('passport');

// Requiring our models and passport as we've configured it
const db = require('../../models');
router.use(cors());
process.env.SECRET_KEY = 'secret';




router.get("/api/students", function (req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Student.findAll({})
    .then(function (dbStudent) {
      res.json(dbStudent);
    });
});

// router.get("/api/Students/:id", function (req, res) {
//   // Here we add an "include" property to our options in our findOne query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Post
//   db.Student.findOne({
//     where: {
//       id: req.params.id
//     }

//   }).then(function (dbStudent) {
//     res.json(dbStudent);
//   });
// });

router.get("/api/Students/:last_name", function (req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Student.findOne({
    where: {
      last_name: req.params.last_name
    }

  }).then(function (dbStudent) {
    res.json([dbStudent]);
  });
});

// router.post("/api/Students", function (req, res) {
//   db.Student.create(req.body).then(function (dbStudent) {
//     res.json(dbStudent);
//   });
// });

router.post('/api/Students', function (req, res) {
  console.log('Adding New Students', req.body);
  db.Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email_pers: req.body.email_pers,
    email_work: req.body.email_work,
    training_phase: req.body.training_phase,
    exam_stage: req.body.exam_stage,
    pediatrics_term: req.body.pediatrics_term,
    ICU_term: req.body.ICU_term,
    anesthetics_term: req.body.anesthetics_term,
    retrieval_term: req.body.retrieval_term,
    associated_DEMT: req.body.associated_DEMT,
    improvement_area_1: req.body.improvement_area_1,
    improvement_area_2: req.body.improvement_area_2,
    improvement_area_3: req.body.improvement_area_3,
    photo_URL: req.body.photo_URL,


  })
    .then(function () {
      res.json({ success: true });
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

router.delete("/api/Students/:id", function (req, res) {
  db.Student.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbStudent) {
    res.json(dbStudent);
  });
});

module.exports = router;
