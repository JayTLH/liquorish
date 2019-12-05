// import packages
const express = require('express')
const app = express()
const cors = require('cors')

// import routes
const drinksRoute = require('./routes/drinks')
const ingredientsRoute = require('./routes/ingredients')
const userRoute = require('./routes/user')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// setting routes
app.use('/drinks', drinksRoute)
app.use('/ingredients', ingredientsRoute)
app.use('/user', userRoute)

// setting the server port
app.listen(8080, () => {
  console.log('server is running on port 8080')
})