// import packages
const express = require('express')
const router = express.Router()

// import data
const Ingredients = require("../models/ingredients")

// setting endpoints
router.get('/', (req, res) => {
  Ingredients.find({}, (error, ing) => {
    res.send(ing)
  })
})

module.exports = router