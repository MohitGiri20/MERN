const { fstat } = require('fs')
var http = require('http')
var prods=[]
var server=http.createServer((req,res)=>{
    if(req.method=='POST' && req.url=='/add'){
        //console.log(chunk)
        req.on("data",(chunk)=>{
            console.log(chunk.toString())
            let str=chunk.toString().split('&')
            let prod={
                product_name:str[0],
                price:parseInt(str[1]),
                quantity:parseInt(str[2])
            }
            prods.push(prod) 
            console.log('Product added')
        })
    }
    else if(req.method=='GET' && req.url=='/api'){
        res.write(JSON.stringify(prods))
    }
    else if(req.method=='DELETE' && req.url=='/del'){
        req.on("data",(chunk)=>{
            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name==chunk.toString())
                prods.splice(i,1)
            }
        })
        console.log("Products deleted")
    }
    else if(req.method=='PATCH' && req.url=='/updtpr'){
        
        req.on("data",(chunk)=>{

            console.log(chunk.toString())
            let str=chunk.toString().split('&')
            let product_name=str[0]
            let price=str[1]


            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name==product_name)
                prods[i].price=price
            }
        })
        console.log('Products Updated')        
    }
    else if(req.method=='POST' && req.url=='/search'){
        let ans=[]
        
        req.on("data",(chunk)=>{
            for(let i=0;i<prods.length;i++){
                if(prods[i].product_name.indexOf(chunk)==0)
                ans.push(prods[i])
            }
        })

        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(ans))

    }
    else if(req.method=='GET' && req.url=='/formreq'){
        res.write(index)
    }
    else if(req.method=='POST' && req.url=='/formreq'){
        req.on("data",(chunk)=>{
            console.log(chunk.toString())
        })
        res.write("Request received")
    }
    res.end()
})
var fs = require('fs')
var index=""
fs.readFile('prodpage.html',function(err,data){
    index=data
    server.listen(5000,()=>{
        console.log("server started");
    })
})
