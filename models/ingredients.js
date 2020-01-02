const mongoose = require("mongoose");

const ingredientsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ing: String,
  mea: Number,
  price: Number,
  url: String
});

module.exports = mongoose.model("Ingredients", ingredientsSchema, "ingredients")