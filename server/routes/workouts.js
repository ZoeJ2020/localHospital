const express = require('express')
const Workout = require('../models/workoutModel')

//create instance of express router
const router = express.Router()

//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: "GET ALL workouts"})
})

//GET individual workouts
router.get('/:id', (req, res) => {
    res.json({mssg: "GET INDIVIDUAL workout"})
})

//POST a new workouts
router.post('/', async (req, res) => {
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

})

//DELETE individual workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE INDIVIDUAL workout"})
})

//UPDATE individual workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE INDIVIDUAL workout"})
})

module.exports = router