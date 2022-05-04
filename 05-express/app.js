const express = require("express")


const app = express()


//MIDDLEWARE
app.use((req, res, next)=>{
    console.log("esto es un middleware")
    next()
})

app.use((req, res, next)=>{
    console.log("esto es otro middleware diferente")
    res.send("pase por los dos middleware")
})



app.listen(3000)