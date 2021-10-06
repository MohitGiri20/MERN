async function getMess(){
    
    //throw new Exception()
    return await "Mess received"
}

var m = getMess()
m.then((data)=>{
  console.log(data);
  console.log(m);
})
// .catch((reject)=>{
//     console.log(reject)
// console.log(m)
// })
console.log("--------------------");
console.log(m);