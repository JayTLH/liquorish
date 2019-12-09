// import packages
const express = require('express')
const router = express.Router()

// import data
const drinks = require('../data/drinks.json')

// setting endpoints
router.get('/', (req, res) => {
  res.send(drinks)
})

module.exports = router