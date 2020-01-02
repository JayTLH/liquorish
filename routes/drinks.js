// import packages
const express = require('express');
const router = express.Router();

// import data
const Drinks = require("../models/drinks");

// setting endpoints
router.get('/', (req, res) => {

  Drinks.find({}, (error, drinkItem) => {
    res.send(drinkItem)
  })

})

module.exports = router