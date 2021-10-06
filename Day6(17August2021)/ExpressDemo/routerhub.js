var express = require('express')

var router = express.Router()
router.use(function(req,res,next){
    console.log("req received")
    next()
})

router.get("/samplerouter",function(req,res){
    res.send("get req")
})

router.post("/samplerouter",function(req,res){
    res.send("post req")
})

module.exports = router