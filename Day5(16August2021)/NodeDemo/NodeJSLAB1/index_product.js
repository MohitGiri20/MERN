var product=[
    {
        prodName : "pen",
        quantity : "5",
        price : 10  
    },
    {
        prodName : "pencil",
        quantity : "10",
        price : 5  
    }

]



var http  = require('http')
var fs = require('fs')
var server= http.createServer((req,res)=>{
    // console.log("Server started")
    // res.writeHead(200,{'Content-Type' : "text/html"})
    // res.write("Hello Ji")
    // res.end() 
    
    if(req.method=="GET"&&req.url=="/")
    {
    // res.write("Home")
    res.write(index)
     res.end()
    }
     if(req.method=="GET" && req.url=="/api"){
     res.writeHead(200,{"Content-Type":"application/json"})
     res.write(JSON.stringify(product))
     res.end()
    }
    if(req.method=="PATCH" && req.url=="/api"){
     
     req.on("data",(chunk)=>{
         console.log(chunk);
         product.forEach(data=>{
             if(data.prodName==JSON.parse(chunk).prodName){
                 data.price=JSON.parse(chunk).price
                 data.quantity=JSON.parse(chunk).quantity
             }
         })
         console.log(product)
     })
     res.writeHead(200,{"Content-Type":"application/json"})
     res.write(JSON.stringify(product))
     res.end()
 }
   
 if(req.method == "POST"  && req.url == "/formreq"){
    //   req.on("data",(chunk)=>{
    //       console.log(chunk)
    //   })
    //   res.write("Request received")
    //   res.end()
    req.on("data",(chunk)=>{
        console.log(chunk);
        product.push(JSON.parse(chunk))
        console.log(product)
    })
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write(JSON.stringify(product))
    res.end()
 }


    if(req.method=="POST" && req.url=="/api"){
        req.on("data",(chunk)=>{
            console.log(chunk);
            product.push(JSON.parse(chunk))
            console.log(product)
        })
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(product))
        res.end()
    }
    if(req.method=="DELETE" && req.url.match("/api/([a-z]+|[A-Z]+)")){
        console.log(req.url.split('/'));
        var p=req.url.split('/')[2];
        product=product.filter(data=>{
            console.log(data);
            return data.prodName!=p
        })
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(product))
        res.end()
    }


})

var index =""
fs.readFile("index.html",(err,data)=>{
    index = data;
server.listen(3000,()=>{
    console.log("server started");
})
})
