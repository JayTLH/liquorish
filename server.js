// import packages
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()
const cors = require('cors')

// import routes
const drinksRoute = require('./routes/drinks')
const ingredientsRoute = require('./routes/ingredients')
const userRoute = require('./routes/user')
const creationsRoute = require('./routes/creations')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// setting routes
app.use('/drinks', drinksRoute)
app.use('/ingredients', ingredientsRoute)
app.use('/user', userRoute)
app.use('/creations', creationsRoute)

// setting the server port
app.listen(PORT, () => {
  console.log('server is running on port 8080')
})