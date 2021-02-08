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
    db.User.findOne({
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
    console.log('Registeration running', req.body);
    db.User.create({
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

router.post('/api/assets', function (req, res) {
    console.log('Updating Assets', req.body);
    db.Assets.create({
        principalResidence: req.body.principalResidence,
        investmentProperty: req.body.investmentProperty,
        homeContents: req.body.homeContents,
        primaryCar: req.body.primaryCar,
        secondaryCar: req.body.secondaryCar,
        cashInBank: req.body.cashInBank,
        managedFund: req.body.managedFund,
        sharePortfolio: req.body.sharePortfolio,
        caravanCamper: req.body.caravanCamper,
        boatWatercraft: req.body.boatWatercraft,
        otherMachinery: req.body.otherMachinery,
        otherAsset: req.body.otherAsset,
        UserId: req.body.UserId
    })
        .then(function () {
            res.json({ success: true });
        })
        .catch(function (err) {
            res.status(500).json(err);
        });
});

router.post('/api/liabilities', function (req, res) {
    console.log('Updating Liabilities', req.body);
    db.Liabilities.create({
        homeMortgage: req.body.homeMortgage,
        investmentPropertyLoans: req.body.investmentPropertyLoans,
        personalLoans: req.body.personalLoans,
        creditCards: req.body.creditCards,
        payDayLending: req.body.payDayLending,
        carLoan: req.body.carLoan,
        otherLoans: req.body.otherLoans,
        UserId: req.body.UserId
    })
        .then(function () {
            res.json({ success: true });
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

router.post('/api/expenses', function (req, res) {
    console.log('Updating Expenses', req.body);
    db.Expenses.create({
        mortgage_repayments: req.body.mortgage_repayments,
        rent: req.body.rent,
        council_rates: req.body.council_rates,
        land_tax: req.body.land_tax,
        electricity_utilities: req.body.electricity_utilities,
        investment_property_costs: req.body.investment_property_costs,
        telephone_internet: req.body.telephone_internet,
        groceries: req.body.groceries,
        recreation_entertainment: req.body.recreation_entertainment,
        clothing_personal_care: req.body.clothing_personal_care,
        medical_health: req.body.medical_health,
        transport: req.body.transport,
        education: req.body.education,
        childcare: req.body.childcare,
        insurance: req.body.insurance,
        child_maintenance: req.body.child_maintenance,
        other_Expenses: req.body.other_Expenses,
        UserId: req.body.UserId
    })
        .then(function () {
            res.json({ success: true });
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

router.put('/api/particulars/:email', function (req, res) {
    console.log('Updating Particulars', req.body);
    console.log(req.params.email);
    db.User.update(
        {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            salutation: req.body.salutation,
            preferredName: req.body.preferredName,
            date_of_birth: req.body.date_of_birth,
            sex: req.body.sex,
            marital_status: req.body.marital_status,
            tax_resident: req.body.tax_resident,
            citizen: req.body.citizen,
            country_of_origin: req.body.country_of_origin,
            preservation_age: req.body.preservation_age,
            age_pension_age: req.body.age_pension_age,
            address: req.body.address,
            mobile: req.body.mobile,
            home_phone: req.body.home_phone,
            work_phone: req.body.work_phone,

        },

        {
            where: {
                email: req.params.email,
            },
        }
    )
        .then(function () {
            console.log('Does this work');
            res.json({ success: true });
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

router.post('/api/income', function (req, res) {
    console.log('Updating Income', req.body);
    db.Income.create({
        employment_type: req.body.employment_type,
        industry: req.body.industry,
        primary_income: req.body.primary_income,
        secondary_income: req.body.secondary_income,
        centrelink_payments: req.body.centrelink_payments,
        dva_payments: req.body.dva_payments,
        superannuation_payments: req.body.superannuation_payments,
        rental_income: req.body.rental_income,
        other_income: req.body.other_income,
        UserId: req.body.UserId
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

// Route for getting some data about our all users to be used client side
router.get('/api/displayusers', function (req, res) {
    db.User.findAll({})
        .then(function (dbUser) {
            res.json(dbUser);
        });
});

// Route for getting data about a particular user based on email 
router.get("/api/users/:email", function (req, res) {
    db.User.findOne({
        where: {
            email: req.params.email
        },

    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

// Route for getting data about a particular user based on last_name 
router.get("/api/users/name/:last_name", function (req, res) {
    db.User.findOne({
        where: {
            last_name: req.params.last_name
        },

    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

// Get route for retrieving assets for a given User
router.get("/api/assets/:id", function (req, res) {

    db.Assets.findOne({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(function (dbAssets) {
        res.json([dbAssets]);
    }).catch(function (error) {
        res.json(error);
    });
});

// Get route for retrieving liabilities for a given User
router.get("/api/liabilities/:id", function (req, res) {

    db.Liabilities.findOne({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(function (dbLiabilities) {
        res.json(dbLiabilities);
    }).catch(function (error) {
        res.json(error);
    });
});

// Get route for retrieving income for a given User
router.get("/api/income/:id", function (req, res) {

    db.Income.findOne({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(function (dbIncome) {
        res.json(dbIncome);
    }).catch(function (error) {
        res.json(error);
    });
});

// Get route for retrieving expenses for a given User
router.get("/api/expenses/:id", function (req, res) {

    db.Expenses.findOne({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(function (dbExpenses) {
        res.json(dbExpenses);
    }).catch(function (error) {
        res.json(error);
    });
});

module.exports = router;
