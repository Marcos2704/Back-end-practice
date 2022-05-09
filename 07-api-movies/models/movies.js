const fileMethod = require("./filemethods")
const {v4:uuid4 } = require("uuid")

class Movie{
    constructor(title, description, cast, genres, director ){
        this.id = uuid4()
        this.title = title
        this.description = description ? description : ""
        this.cast = cast? cast : []
        this.genres = genres? genres : []
        this.director = director? director : []
    }

   async save() {
       try{
        const movieSaved = await fileMethod.saveEntity(this)
        console.log(movieSaved)
        return movieSaved
       }
       catch(err){
            console.log(err)
       }
       
    }
}

module.exports = Movie

