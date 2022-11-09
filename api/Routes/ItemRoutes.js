const express = require("express");
const router = express.Router();
const {
  getItems,
  addItem,
  deleteItem,
} = require("../Controllers/ItemController");

router.get("/items", getItems);
router.post("/item", addItem);
router.delete("/item/:id", deleteItem);

module.exports = router;
