const express = require("express");
const playerRouter = require("./routes/players")

const app = express()

app.use("/players", playerRouter)

app.listen(3000, () =>{
    console.log("Listening")
})