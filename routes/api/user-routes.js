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

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/api/login', (req, res) => {
    db.Author.findOne({
        where: {
            email: req.body.email,
        },
    }
    )
        .then((response) => {
            console.log();
            console.log(response);
            if (response) {
                if (bcrypt.compareSync(req.body.password, response.password)) {
                    const { password, ...userData } = response.get({ plain: true })
                    console.log(userData);
                    let token = jwt.sign(userData, process.env.SECRET_KEY, {
                        // 1 year in seconds
                        expiresIn: 31556926,
                    });
                    res.send(token);
                } else {
                    res.status(400).json({ error: 'Password is not correct' });
                }
            } else {
                res.status(400).json({ error: 'User does not exist' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/api/register', function (req, res) {
    console.log('Registration running', req.body);
    db.Author.create({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role: "user"
    })
        .then(function () {
            res.json({ success: true });
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});




// Route for logging user out
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

// Route for getting some data about our all authors to be used client side
router.get('/api/displayauthors', function (req, res) {
    db.Author.findAll({})
        .then(function (dbAuthor) {
            res.json(dbAuthor);
        });
});

// Route for getting data about a particular author based on email 
router.get("/api/author/:email", function (req, res) {
    db.Author.findOne({
        where: {
            email: req.params.email
        },

    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

// Route for getting data about a particular author based on last_name 
router.get("/api/authors/name/:last_name", function (req, res) {
    db.Author.findOne({
        where: {
            last_name: req.params.last_name
        },

    }).then(function (dbUser) {
        res.json(dbUser);
    });
});





module.exports = router;
