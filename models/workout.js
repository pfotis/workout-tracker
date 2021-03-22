const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name of exercise"
            },
            duration: {
                type: Number,
                required: "Enter an length"
            },
            weight: {
                type: Number,
                required: "Enter an weight"
            },
            reps: {
                type: Number,
                required: "Enter the reps"
            },
            sets: {
                type: Number,
                required: "Enter the sets"
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;