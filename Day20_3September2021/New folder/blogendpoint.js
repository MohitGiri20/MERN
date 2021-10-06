const blogdata=require('./blogdata')
const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const swaggerUi = require("swagger-ui-express")
swaggerDocument = require("./swagger.json");
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.listen("5050",()=>{
console.log("server started")
})
app.get("/blogs",(req,res)=>{
  
    res.send(blogdata)
})

app.get("/blogs/:blogTitle",(req,res)=>{

    var blogTitle = req.params.blogTitle;
    console.log(blogTitle);
    const arr = blogdata.filter((blog) => {
       return blog.blogtitle === blogTitle        
  })
    res.send(arr);
    

})

app.post("/addblog",(req,res)=>{
    blogdata.push(req.body)
    res.send("blog added")
})