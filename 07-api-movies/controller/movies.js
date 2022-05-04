const Movie = require("../models/movies")


const create = async (req, res, next) =>{
    const title = req.body.title

    //validacion del titulo
    if(title === undefined || title === ""){
        res.statusCode = 400
        res.send("tittle canot be empty")
    }

    let newMovie = new Movie(
        title,
        req.body.description,
        req.body.cast,
        req.body.director,
        req.body.genres
      );

      try{
        const movieSaved = await newMovie.saved()
        res.send(movieSaved)
      }
      catch(e){
          console.log(e)
          res.send(500, e.message)
      }


    
}

const search = (req, res, next) =>{ 
    res.send("searching movie: "+ req.query.tittle)
}

const getById = (req, res, next) =>{ 
    //PATH PARAM ID es parte de la ruta, lo puedo acceder como parte del req
    const index =  req.params.id
    console.log(index)
    const movie = movies(index)
    res.send(movie.tittle)
}

const updateById = (req, res, next) =>{ 
    //PATH PARAM ID es parte de la ruta, lo puedo acceder como parte del req
    res.send("updating movie: "+ req.params.id)
}

const deleteMovie = (req, res, next) =>{ 
    //PATH PARAM ID es parte de la ruta, lo puedo acceder como parte del req
    res.send("deleting movie: "+ req.params.id)
}

module.exports = 
{
    create, 
    search, 
    getById, 
    updateById, 
    deleteMovie
}