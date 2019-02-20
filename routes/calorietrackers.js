// Importing the model file directly from "calorietracker" located in the models folder
var CalorieTracker = require("../models/calorietracker");

// Created so sub-routes can be created. Creates the slots for data.
var router = require('express').Router();

// "CalorieTracker.find" is searching the CalorieTracker collection for any data attached to "userID"
router.get("/:userID", (req, res) => {
    CalorieTracker.find({ 
        userID: req.params.userID, 
        date: {
            $gte : new Date('2019-02-05'),
            $lte : new Date('2019-02-19')
        }
    }).sort({date: -1})
        .then(result => res.json(result),
            err => res.json({ err }))
});

router.post("/:userID", (req, res) => {
    CalorieTracker.create({ 
        userID: req.params.userID, 
        positiveCalories: req.body.positiveCalories,
        negativeCalories: req.body.negativeCalories,
        date: req.body.date,
     })
        .then(result => res.json(result),
            err => res.json({ err }))
});

router.delete("/:calorieTrackerID", (req, res) => {
    res.json({ calorieTrackerID: req.params.calorieTrackerID });
});

module.exports = router;

