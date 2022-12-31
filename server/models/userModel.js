const mongoose = require("mongoose")

const Schema = mongoose.Schema

//schema for login form
const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
        
        // cannot use same username for two accounts
        unique: true
    },
    pword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Login', loginSchema)