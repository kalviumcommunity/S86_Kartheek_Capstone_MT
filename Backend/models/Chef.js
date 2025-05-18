const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
  name: String,
  bio: String
});

module.exports = mongoose.model("Chef", chefSchema);
