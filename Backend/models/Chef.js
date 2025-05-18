const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bio: String,
  cuisineSpecialty: [String],
});

module.exports = mongoose.model("Chef", chefSchema);
