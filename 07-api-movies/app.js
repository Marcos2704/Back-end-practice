const express = require("express")
const moviesRouter = require("./routes/movies")
const bodyParser = require("body-parser")

const app = express()


app.use(bodyParser.json())
app.use("/api/movies", moviesRouter)

app.listen(3000, () =>{
    console.log("Listening...")
})