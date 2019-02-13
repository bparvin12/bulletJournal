var moment = require('moment');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calorieTrackerSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    positiveCalories: { type: Number, required: true },
    negativeCalories: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const CalorieTracker = mongoose.model("CalorieTracker", calorieTrackerSchema);

module.exports = CalorieTracker;



// creating multiple unique IDs
// mySchema.index({field1: 1, field2: 1}, {unique: true});