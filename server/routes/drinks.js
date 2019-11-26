// import packages
const express = require('express')
const router = express.Router()

// setting endpoints
router('/', (req, res) => {
  res.status(200).send('Hi there')
})