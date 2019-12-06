// import packages
const express = require('express');
const router = express.Router();
const fs = require('fs');

// import data
let creations = require('../data/creations');

// setting endpoints

// sending creations data
router.get('/', (req, res) => {
  res.send(creations);
});

// recieving new created item
router.post('/', (req, res) => {
  creations.push(req.body);
  res.status(201).send(creations);
});

// removing created item
router.delete('/:id', (req, res) => {
  let creationsCopy = creations.slice()
  let itemIndex = creationsCopy.findIndex(index => {
    return index.strDrink === req.params.id
  })
  creationsCopy.splice(itemIndex, 1)
  creations = creationsCopy
  res.send("delete successful")
})

module.exports = router;