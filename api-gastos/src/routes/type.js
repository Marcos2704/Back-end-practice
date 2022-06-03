const express = require("express");

const TypeController = require("../controllers/type");

const router = express.Router();

//  /api/genre/
router.post("/", TypeController.create);

// /api/genre/
router.get("/", TypeController.findAll);

router.get("/search", TypeController.findType);

module.exports = router;
