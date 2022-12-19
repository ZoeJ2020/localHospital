const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: "POST NEW workout"})
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