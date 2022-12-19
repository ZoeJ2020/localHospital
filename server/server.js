require('dotenv').config()

const express = require('express')

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


//listen to port number for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})

