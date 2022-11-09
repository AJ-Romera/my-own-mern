const express = require("express");
const router = express.Router();
const { getItems, addItem } = require("../Controllers/ItemController");

router.get("/items", getItems);
router.post("/add-item", addItem);

module.exports = router;
