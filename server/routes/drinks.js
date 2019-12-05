// import packages
const express = require('express')
const router = express.Router()

// import data
const data = require('../data/data')

// setting endpoints
router.get('/', (req, res) => {
  res.send(data)
})

// uploading new recipe
// router.post('/', (req, res) => {
//   data.push(req.body)
// })

module.exports = router