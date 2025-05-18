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

// POST a new order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Failed to create order" });
  }
});

// PUT update order by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: "Failed to update order" });
  }
});

module.exports = router;
