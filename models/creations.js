const mongoose = require("mongoose");

const creationsSchema = mongoose.Schema({
  idDrink: String,
  strDrink: String,
  strCategory: String,
  strAlcoholic: String,
  strGlass: String,
  strInstructions: String,
  strDrinkThumb: Buffer,
  ingredients__001: String,
  ingredients__002: String,
  ingredients__003: String,
  ingredients__004: String,
  ingredients__005: String,
  ingredients__006: String,
  ingredients__007: String,
  ingredients__008: String,
  ingredients__009: String,
  ingredients__010: String,
  measurements__001: String,
  measurements__002: String,
  measurements__003: String,
  measurements__004: String,
  measurements__005: String,
  measurements__006: String,
  measurements__007: String,
  measurements__008: String,
  measurements__009: String,
  measurements__010: String
});

module.exports = mongoose.model("Creations", creationsSchema, "creations")