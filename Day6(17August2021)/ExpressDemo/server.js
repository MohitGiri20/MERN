var express = require("express")
var app = express()
var bodyparser = require("body-parser")

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
// For passing data as JSON
//app.use(express.json)
products =[]

var server = app.listen(8087,function(){
    console.log("server started")
})

app.get("/showproducts",function(req,res){
    // res.send("Hello from server")
    // console.log(req.param('name'))
    // console.log(res.statusCode)
    res.send(products)
    
})

app.get("/myname",function(req,res){
    res.send("Hello Ji")
})
app.get(/.*fly$/,function(req,res){
    // res.send("Hello from server")
    // console.log(req.param('name'))
    // console.log(res.statusCode)
    res.send(products)
})

app.get("/show/:id/:name",function(req,res){
    console.log(req.params['id'])
    console.log(req.params['name'])
    res.send("Id retrieved")
})

app.post("/",function(req,res){
var data = req.body
    console.log(data)
     products.push(data); 
    // res.send("data accepted")
    res.redirect("/")
})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})

app.route("/items").get(function(req,res){
  res.send("get request")
})
.post(function(req,res){
res.send("post request")
 console.log(req.body)
}).put(function(req,res){
    res.send("put request")
})


// Router method as a middleware
// can be used in separate file and use as a model
// var router = express.Router()
// router.use(function(req,res,next){
//     console.log("req received")
//     next()
// })

// router.get("/samplerouter",function(req,res){
//     res.send("get req")
// })

// router.post("/samplerouter",function(req,res){
//     res.send("post req")
// })
//app.use(router)

var routeHub = require('./routerhub')
app.use('/routerhub',routeHub);