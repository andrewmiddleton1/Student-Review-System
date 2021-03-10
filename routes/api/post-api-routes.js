/* eslint-disable prettier/prettier */
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
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

// GET route for getting all of the posts
router.get("/api/posts", function (req, res) {
  var query = {};
  if (req.query.author_id) {
    query.AuthorId = req.query.author_id;
  }
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Author
  db.Post.findAll({
    where: query,
    include: [db.Author]
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

// Get route for retrieving a single post
router.get("/api/posts/:StudentId", function (req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Author
  db.Post.findOne({
    where: {
      StudentId: req.params.StudentId
    },

  }).then(function (dbPost) {
    res.json([dbPost]);
  });
});

// POST route for saving a new post
router.post("/api/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.post('/api/feedback', function (req, res) {
  console.log('Feedback running', req.body);
  db.Post.create({
    type: req.body.type,
    StudentId: req.body.StudentId,
    time_date: req.body.time_date,
    global_assessment: req.body.global_assessment,
    prioritisation_decision_making: req.body.prioritisation_decision_making,
    professionalism: req.body.professionalism,
    scholarship_teaching: req.body.scholarship_teaching,
    teamwork_collaboration: req.body.teamwork_collaboration,
    leadership_management: req.body.leadership_management,
    health_advocacy: req.body.health_advocacy,
    communication: req.body.communication,
    sick_calls: req.body.sick_calls,
    body: req.body.body,
    AuthorId: req.body.AuthorId

  })
    .then(function () {
      res.json({ success: true });
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

// PUT route for updating posts
router.put("/api/posts", function (req, res) {
  db.Post.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
});

module.exports = router;
