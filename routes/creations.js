// import packages
const express = require('express');
const router = express.Router();
const nanoid = require('nanoid')
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
const upload = multer({ storage: storage })

// import data
let Creations = require('../models/creations');
let Drinks = require('../models/drinks');

// setting endpoints
// sending creations data
router.get('/', (req, res) => {
  Creations.find({}, (err, crea) => {
    res.send(crea);
  })
});

// recieving new created item
router.post('/', upload.single('uploadImage'), (req, res) => {
  let reqBodyIng01 = null
  let reqBodyMea01 = null
  let reqBodyIng02 = null
  let reqBodyMea02 = null
  let reqBodyIng03 = null
  let reqBodyMea03 = null
  let reqBodyIng04 = null
  let reqBodyMea04 = null
  let reqBodyIng05 = null
  let reqBodyMea05 = null
  let reqBodyIng06 = null
  let reqBodyMea06 = null
  let reqBodyIng07 = null
  let reqBodyMea07 = null
  let reqBodyIng08 = null
  let reqBodyMea08 = null
  let reqBodyIng09 = null
  let reqBodyMea09 = null
  let reqBodyIng10 = null
  let reqBodyMea10 = null

  if (req.body.ingredients__001) {
    reqBodyIng01 = req.body.ingredients__001
    reqBodyMea01 = req.body.measurements__001
  }
  if (req.body.ingredients__002) {
    reqBodyIng02 = req.body.ingredients__002
    reqBodyMea02 = req.body.measurements__002
  }
  if (req.body.ingredients__003) {
    reqBodyIng03 = req.body.ingredients__003
    reqBodyMea03 = req.body.measurements__003
  }
  if (req.body.ingredients__004) {
    reqBodyIng04 = req.body.ingredients__004
    reqBodyMea04 = req.body.measurements__004
  }
  if (req.body.ingredients__005) {
    reqBodyIng05 = req.body.ingredients__005
    reqBodyMea05 = req.body.measurements__005
  }
  if (req.body.ingredients__006) {
    reqBodyIng06 = req.body.ingredients__006
    reqBodyMea06 = req.body.measurements__006
  }
  if (req.body.ingredients__007) {
    reqBodyIng07 = req.body.ingredients__007
    reqBodyMea07 = req.body.measurements__007
  }
  if (req.body.ingredients__008) {
    reqBodyIng08 = req.body.ingredients__008
    reqBodyMea08 = req.body.measurements__008
  }
  if (req.body.ingredients__009) {
    reqBodyIng09 = req.body.ingredients__009
    reqBodyMea09 = req.body.measurements__009
  }
  if (req.body.ingredients__010) {
    reqBodyIng10 = req.body.ingredients__010
    reqBodyMea10 = req.body.measurements__010
  }

  let incomingUpload = {
    idDrink: nanoid(),
    strDrink: req.body.strDrink,
    strAlcoholic: req.body.strAlcoholic,
    strGlass: req.body.strGlass,
    strInstructions: req.body.strInstructions,
    strDrinkThumb: fs.readFileSync(`public/uploads/${req.file.filename}`),
    ingredients__001: reqBodyIng01,
    measurements__001: reqBodyMea01,
    ingredients__002: reqBodyIng02,
    measurements__002: reqBodyMea02,
    ingredients__003: reqBodyIng03,
    measurements__003: reqBodyMea03,
    ingredients__004: reqBodyIng04,
    measurements__004: reqBodyMea04,
    ingredients__005: reqBodyIng05,
    measurements__005: reqBodyMea05,
    ingredients__006: reqBodyIng06,
    measurements__006: reqBodyMea06,
    ingredients__007: reqBodyIng07,
    measurements__007: reqBodyMea07,
    ingredients__008: reqBodyIng08,
    measurements__008: reqBodyMea08,
    ingredients__009: reqBodyIng09,
    measurements__009: reqBodyMea09,
    ingredients__010: reqBodyIng10,
    measurements__010: reqBodyMea10
  }

  let newCrea = new Creations(incomingUpload)
  newCrea.save()
    .then(data => res.status(201).json(data))
    .catch(err => console.error(err))

  // let newDrink = new Drinks(incomingUpload)
  // newDrink.save()
  //   .then(data => res.status(201).json(data))
  //   .catch(err => console.error(err))
});

// removing created item
router.delete('/:id', (req, res) => {
  let creationsCopy = creations.slice()
  let itemIndex = creationsCopy.findIndex(index => {
    return index.strDrink === req.params.id
  })
  creationsCopy.splice(itemIndex, 1)
  fs.writeFile('./data/creations.json', JSON.stringify(creationsCopy), (err) => {
    if (err) throw err;
  })

  let drinksCopy = drinks.slice()
  let itemIndexDrink = drinksCopy.findIndex(index => {
    return index.strDrink === req.params.id
  })
  drinksCopy.splice(itemIndexDrink, 1)
  fs.writeFile('./data/drinks.json', JSON.stringify(drinksCopy), (err) => {
    if (err) throw err;
  })

  res.send(creationsCopy)
})

module.exports = router;