require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

//express app is stored here
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//gets workout routes
const workoutRoutes = require('./routes/workouts')

//use workout routes in specfic page in app
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
//.then ONLY RUNS WHEN CONNECTION TO DATABASE IS ESTABLISHED
    .then(() => { 
    
        //listen to port number for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to db & listening on port', process.env.PORT);
        })

    })

    // find errors if they appear
    .catch((error) => {
        
        console.log(error)
    
    })


