const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

module.exports = {loginUser}