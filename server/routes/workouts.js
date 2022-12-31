const express = require('express')
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//create instance of express router
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)


//GET individual workouts
router.get('/:id', getWorkout)

// //POST a new workouts
router.post('/', createWorkout)

//DELETE individual workouts
router.delete('/:id', deleteWorkout)

//UPDATE individual workouts
router.patch('/:id', updateWorkout)

module.exports = router