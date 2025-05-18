const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customerId")
      .populate("menuItems");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
