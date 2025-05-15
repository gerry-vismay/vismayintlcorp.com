const express = require("express");
const router = express.Router();
const deptController = require("../controllers/deptController");
const { authenticate } = require("../middleware/authMiddleware");

router.get("/dept", authenticate, deptController.getDept);
router.put("/dept/:id", authenticate, deptController.updateDept);

module.exports = router;
