// Created so sub-routes can be created
var router = require('express').Router();

router.get("/:userID", (req, res) => {
    res.json({ userID: req.params.userID });
});

router.post("/:userID", (req, res) => {
    res.json({ userID: req.params.userID, body:req.body });
});

router.delete("/:calorieTrackerID", (req, res) => {
    res.json({ calorieTrackerID: req.params.calorieTrackerID});
});

module.exports = router;

