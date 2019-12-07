// import packages
const express = require('express')
const router = express.Router()

// import data
const ingredients = require('../data/ingredients/ingredients')

// setting endpoints
router.get('/', (req, res) => {
  res.send(ingredients)
})

module.exports = router