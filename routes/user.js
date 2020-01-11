// import packages
const express = require('express');
const router = express.Router();

// import data
const User = require("../models/user");

// setting endpoints
// sending user data
router.get('/', (req, res) => {
  User.find({}, (error, use) => {
    res.send(use);
  })
});

// recieving new liked item
router.post('/', (req, res) => {
  let newFav = new User(req.body);
  newFav.save()
    .then(data => res.status(201).json(data))
    .catch(err => console.error(err))
});

// removing liked item
router.delete('/:id', (req, res) => {
  User.deleteOne({ strDrink: req.params.id }, (err, fav) => {
    User.find({}, (error, use) => {
      res.send(use);
    })
  })
})

module.exports = router;