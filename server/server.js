// import packages
const express = require('express')
const app = express()
const cors = require('cors')

// import routes
const drinksRoute = require('./routes/drinks')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// setting routes
app.use('/drinks', drinksRoute)

// setting the server port
app.listen(8080, () => {
  console.log('server is running on port 8080')
})