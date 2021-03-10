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


router.get("/api/authors", function (req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Author.findAll({
    include: [db.Post]
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.get("/api/authors/:id", function (req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Author.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.post("/api/authors", function (req, res) {
  db.Author.create(req.body).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.delete("/api/authors/:id", function (req, res) {
  db.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

module.exports = router;
