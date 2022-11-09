const ItemModel = require("../Models/ItemModel");

// @desc  Get items
// @route  GET /api/items
// @access  Private
const getItems = async (req, res) => {
  const items = await ItemModel.find();

  res.status(200).json(items);
};

// @desc  Add item
// @route  POST /api/add-item
// @access  Private
const addItem = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.price ||
    !req.body.imageUrl
  ) {
    res
      .status(400)
      .json({ message: "Please add the name, description, price and image" });
  }
  const item = await ItemModel.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  });

  res.status(200).json(item);
};

module.exports = {
  getItems,
  addItem,
};
