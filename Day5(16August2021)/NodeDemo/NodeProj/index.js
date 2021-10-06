var item = [
    {
        itemName : "Pen",
        itemprice : 20
    },
    {
        itemName : "Pencil",
        itemprice : 10
    }
]



var http  = require('http')
var server= http.createServer((req,res)=>{
    // console.log("Server started")
    // res.writeHead(200,{'Content-Type' : "text/html"})
    // res.write("Hello Ji")
    // res.end() 
    
    if(req.method=="GET" && req.url == "/"){
        res.write("Home")
        res.end()
    }
    if(req.method=="GET" && req.url == "/api"){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(item))
       // res.write("API page")
        res.end()
    }

   


    if(req.method=="POST" && req.url=="/api"){
        //  Data coming from message body
        

        req.on("data",(chunk)=>{
            console.log(chunk);
            //item.push(chunk.toString())
            item.push(JSON.parse(chunk))

        })
        // res.write("Data Stored")
        res.end()
    }
    
    if(req.method == "DELETE" && req.url.match("/api/([a-z]+)")){
          console.log(req.url.split("/")[1] + "deleted")
          res.write("data deleted")
          res.end()
            
    }

    if(req.method == "PATCH" && req.url=="/api"){
        req.on("data",(chunk)=>{
            console.log("patch request for updation"+chunk.toString());
        })
        res.write("updation done")
        res.end()
    }



})

server.listen(3000,()=>{
    console.log("server started");
})