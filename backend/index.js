require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express();

//middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Controllers and Routes
app.use('/players', require('./controllers/players'))
app.use('/holes', require('./controllers/holes'))
app.use('/leaderboard', require('./controllers/leaderboard'))

//Listening on Port
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`)
})