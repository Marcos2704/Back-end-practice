const express = require("express")
const movieController = require("../controller/movies")
const router = express.Router()



//CREAR PELICULA
// /api/movie/create
router.post("/", movieController.create)


//OBTENER PELICULA POR ID
// /api/movie/123
router.get("/id/:id", movieController.getById)


//OBTENER PELICULA POR TITULO (por ahora solo por titulo)
// /api/movie/search?tittle=batman
router.get("/search", movieController.search)


//EDITAR PELICULA
// /api/movie/123
router.put("/id/:id", movieController.updateById)


//BORRAR UNA PELICULA
router.delete("/id/:id", movieController.deleteMovie)




module.exports = router