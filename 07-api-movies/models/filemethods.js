const fs = require("fs")

const saveEntity = (entity) =>{
    return new Promise ((resolve, reject) => {
        fs.writeFile("./data/"+ entity.id +".json",
        JSON.stringify(entity), 
        (err, data)=>{
            if(err){
                reject
            }
            resolve(entity)
        } )
    })
}

module.exports = {saveEntity}