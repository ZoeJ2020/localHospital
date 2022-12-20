// This will contain the LAYOUT/STRUCTURE of our data for our Workouts.
//  This makes it easier to post and update data when filling in the forms on our page.

const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema for workouts
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})
// timestamps set to true AUTOMATICALLY ADDS TIMESTAMPS to our data when updated and posted.

//creates a model to interact with the Workout collection in database
module.exports = mongoose.model('Workout', workoutSchema)