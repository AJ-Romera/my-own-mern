const express = require("express");
const router = express.Router();
const {
  getItems,
  addItem,
  deleteItem,
  getItem,
} = require("../Controllers/ItemController");

router.get("/items", getItems);
router.get("/item/:id", getItem);
router.post("/item", addItem);
router.delete("/item/:id", deleteItem);

module.exports = router;
