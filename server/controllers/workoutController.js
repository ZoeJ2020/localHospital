// These functions will be referenced in route file instead of hard-coding, this is purely to keep the routes files cleaner and less bulky

const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
require('../models/workoutModel')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    // {} means all workouts ever, sort by date descending order

    // send status that all is fine
    res.status(200).json(workouts)
}

// get individual workout
const getWorkout = async (req, res) => {
    // grab ID from route parameters, so we know which workout to access
    const { id } = req.params

    // check that id is valid and existing type of object ID
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        // if not valid, return response
        return res.status(404).json({error: 'Workout does not exist.'})
    }

    // use workout model to find workout
    const workout = await Workout.findById(id)

    // if workout is not found
    if(!workout){
        return res.status(404).json({error: 'Workout does not exist.'})
    }

    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res) => {
        //get data from req
        const {title, load, reps} = req.body

        //TRY to send data, CATCH errors if any exist
        try{
            //create new document with these properties
            const workout = await Workout.create({title, load, reps})
    
            //display response data with completed workout submission
            res.status(200).json(workout)
    
        } catch(error){
            res.status(400).json({error: error.message})
        }
}

// delete individual workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        // if not valid, return response
        return res.status(404).json({error: 'Workout does not exist.'})
    }

    // find one workout and delete id found in route param
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(404).json({error: 'Workout does not exists.'})
    }

    res.status(200).json(workout)
}

// update individual workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    // check id is valid in mongoose
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'Workout does not exist.'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
        // whatever properties are within the req body will be updated
    })

    if (!workout){
        return res.status(404).json({error: 'Workout does not exists.'})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}