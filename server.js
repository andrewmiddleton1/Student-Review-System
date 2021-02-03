// Requiring necessary npm packages
var express = require('express');
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require('passport');
const routes = require('./routes');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 5001;
var db = require('./models');

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

// Requiring our routes
app.use(routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
    });
});
