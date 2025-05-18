const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: String,
  price: Number,
  chefId: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" }
});

module.exports = mongoose.model("Menu", menuSchema);
