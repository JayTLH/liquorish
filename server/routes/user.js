// import packages
const express = require('express');
const router = express.Router();
const fs = require('fs');

// import data
let user = require('../data/user.json');

// setting endpoints

// sending user data
router.get('/', (req, res) => {
  res.send(user);
});

// recieving new liked item
router.post('/', (req, res) => {
  user.push(req.body);
  fs.writeFile('./data/user.json', JSON.stringify(user), (err) => {
    if (err) throw err;
  })
  res.status(201).send(user);
});

// removing liked item
router.delete('/:id', (req, res) => {
  let userCopy = user.slice()
  let itemIndex = userCopy.findIndex(index => {
    return index.strDrink === req.params.id
  })
  userCopy.splice(itemIndex, 1)
  fs.writeFile('./data/user.json', JSON.stringify(userCopy), (err) => {
    if (err) throw err;
  })
  res.send(userCopy)
})

module.exports = router;