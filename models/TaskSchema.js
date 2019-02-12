// Require mongoose
const mongoose = require("mongoose");
const moment = require('moment');

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaskSchema object
const TaskSchema = new Schema ({
    task: {
        type: String,
        trim: true,
        required: "Please label your task."
    },
    date: {
        type: Moment,
        match: [/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "YYYY-MM-DD"],
        default: moment().format('YYYY-MM-DD')
    },
    time: {
        type: String,
        match: [/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/, "HH:mm AM/PM"],
        default: "11:59 PM"
    },
    description: {
        type: String,
        trim: true

    },
    priority: {
        type: Number,
        enum: [ 1 , 2 , 3]
    },
    status: {
        type: String,
        enum: [
            "pending","started", "postponed", "completed", "canceled"
        ]
    },
    user: {
        type: String,
        trim: true,
        required: "ERROR logging user"
    }
});


// This creates our model from the above schema, using mongoose's model method
var Task = mongoose.model("Example", TaskSchema);

// Export the Example model
module.exports = Task;
