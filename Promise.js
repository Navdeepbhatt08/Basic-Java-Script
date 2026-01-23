console.log("Start")

const sub = new Promise((resolve,reject)=>{
  
  setTimeout(()=>{
  const res = true;
  if(res)
    resolve("Please Do This Task Properly");
  else
  reject(new Error("Why haven't you did that task.."))
     
  },2000);
})
sub.then((resolve)=>{
   console.log(resolve)
  }).catch((err)=>{
      console.log(err)
  })

console.log("Stop")