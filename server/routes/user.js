const express = require('express')

// controller function = log in user function
const { loginUser } = require('../controllers/userController')

// instance of express router
const router = express.Router()

// login route
router.post('/login', loginUser)


module.exports = router