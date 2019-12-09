// import packages
const express = require('express');
const router = express.Router();
const fs = require('fs');

// multer package setup to receive images
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/uploads');
  },
  filename: (req, file, callBack) => {
    callBack(null, new Date().getTime() + file.originalname);
  }
})
const upload = multer({storage: storage})

// import data
let creations = require('../data/creations.json');

// setting endpoints
// sending creations data
router.get('/', (req, res) => {
  res.send(creations);
});

// recieving new created item
router.post('/', upload.single('uploadImage'), (req, res) => {
  // creations.push(req.body);
  console.log("file", req.file)
  console.log("body", req.body)
  // let incomingUpload = {

  // }
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