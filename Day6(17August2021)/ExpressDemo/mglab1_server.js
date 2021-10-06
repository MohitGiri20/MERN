var express = require("express")
var app = express()
var bodyparser = require("body-parser")

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


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

app.post("/",function(req,res){
var data = req.body
    console.log(data)
     products.push(data); 
     res.send("data accepted")
})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})
