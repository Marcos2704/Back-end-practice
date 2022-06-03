const express = require("express");

const gastosController = require("../controllers/gastos");

const router = express.Router();

//  /api/movies/
router.post("/", gastosController.createGastos);

// /api/movies/search ?title=avatar&reviews=true
router.get("/search/", gastosController.findGastoByArticle);
router.get("/search/", gastosController.findGastoByPrice);

// /api/movies/
router.get("/", gastosController.GastosfindAll)


module.exports = router;