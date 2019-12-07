// import packages
const express = require('express')
const router = express.Router()

// import data
const data = require('../data/data/data')

// setting endpoints
router.get('/', (req, res) => {
  res.send(data)
})

module.exports = router