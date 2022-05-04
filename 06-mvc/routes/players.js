const express = require("express")

const router = express.Router();

router.get("/:id",function(req, res, next){
    console.log(req.params.id)
} )

console.log(module)

module.exports = router