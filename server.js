// import packages
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 8080;

// import routes
const drinksRoute = require('./routes/drinks')
const ingredientsRoute = require('./routes/ingredients')
const userRoute = require('./routes/user')
const creationsRoute = require('./routes/creations')

// middleware
app.use(express.static('public'))
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}
app.use(cors())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// setting routes
app.use('/drinks', drinksRoute)
app.use('/ingredients', ingredientsRoute)
app.use('/user', userRoute)
app.use('/creations', creationsRoute)

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

// setting the server port
app.listen(PORT, () => {
  console.log('server is running on port 8080')
})