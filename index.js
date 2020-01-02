// import packages
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 8080;

// database
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:k1i2e3l4@playground-kyfkl.mongodb.net/liquorish-capstone?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {
  console.log("MongoDB connected")
  // console.log(res)
  // console.log(res.connections)
})
.catch(err => {
  console.error(err)
})
// const uri = "mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW +"@playground-kyfkl.mongodb.net/test?retryWrites=true&w=majority";

// import routes
const drinksRoute = require('./routes/drinks')
const ingredientsRoute = require('./routes/ingredients')
const userRoute = require('./routes/user')
const creationsRoute = require('./routes/creations')

// middleware
app.use(express.static('public'))
app.use(express.json());
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
  console.log('server is running on port:', PORT)
})