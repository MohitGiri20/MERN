var fs =require("fs")


// Asynchronous Functions
// fs.readFile("hello.txt","utf-8",function(err,data){
//     console.log(data);
// })

// fs.appendFile("hello.txt","Append to file",function(err){
//     if(err) throw err
//     console.log(err)
// })

// fs.writeFile("hello1.txt","Hello to file",function(err){
//     console.log(err)
// })


// fs.open("hello.txt","r",function(err,file){
//     fs.readFile(file,"utf-8",function(err,data){
//         console.log(data);
//     })
//     console.log(file)
// })

// Synchronous operations
// never run synch and asynch file parallely.
fs.writeFileSync("hello.txt","Synch Data")