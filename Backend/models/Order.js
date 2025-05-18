const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }]
});

module.exports = mongoose.model("Order", orderSchema);
