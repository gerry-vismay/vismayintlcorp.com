const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const { authenticate } = require("../middleware/authMIddleware");

router.get("/items", authenticate, itemController.getItems);
router.post("/items", authenticate, itemController.addItem);
router.put("/items/:id", authenticate, itemController.updateItem);
router.delete("/items/:id", authenticate, itemController.deleteItem);

module.exports = router;
