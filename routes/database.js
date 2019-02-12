const express = require('express');
// const router = require('express-promise-router')();
const mongojs = require('mongoose');
const logger = require('morgan');
const app = express();
const Task = require("../models/TaskSchema.js");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// == Routes ==================================================================
// ============================================================================

// -- SUBMIT -----------------------------------------------------------------
app.post("/task/submit", function (req, res) {
    // Create a new user using req.body
    Task.create(req.body)
        .then(function (dbTask) {
            // If saved successfully, send the new User document to the client
            res.json(dbTask);
        })
        .catch(function (err) {
            // If an error occurs, send the error to the client
            res.json(err);
        });
});

