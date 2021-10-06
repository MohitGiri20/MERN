var jwt = require('jsonwebtoken')
var express = require('express')
var cors = require('cors')

var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// function get_token(username,password){
//     var userobj = {
//         'username' : username,
//         'password' : password
//     }

//     return jwt.sign(userobj,"hello")
// }

function get_token(obj){
    return jwt.sign(obj,"hello");
}

function validate(t,pass){
    return jwt.verify(t,pass)
}


var server = app.listen(8089,()=>{
    console.log("Server started")
})

app.post("/register",function(req,res){
    var userObj = req.body;
    var token = get_token(userObj)
    console.log(token)
    res.send({"token":token,"secret":"hello"})
})

app.post("/login",function(req,res){
    var t = req.body.token
    var secret = req.body.secret
    var auth = validate(t,secret)
    console.log(auth)
    res.send("User authenticated")
})



//console.log(get_token("mohit",123))