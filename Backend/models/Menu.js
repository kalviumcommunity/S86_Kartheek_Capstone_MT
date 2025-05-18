//models/Menu.js
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
  title: String,
  description: String,
  price: Number,
  image: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Menu", menuSchema);
