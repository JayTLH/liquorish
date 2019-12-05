// import packages
const express = require('express');
const router = express.Router();
const fs = require('fs');

// import data
const user = require('../data/user');

// setting endpoints

// sending user data
router.get('/', (req, res) => {
  res.send(user);
});

// recieving new liked item
router.post('/', (req, res) => {
  user.push(req.body);
  res.status(201).send(user);
});

module.exports = router;