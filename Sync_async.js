// var ans = new Promise((res,rej)=>{
// var n = Math.floor(Math.random()* 10);
//  if(n>5){
//     return res();
//  } 
//  else
//  return rej();
// })

// ans.then(function(){
//     console.log('Below')
// })
// .catch(function(){
//     console.log('Above')
// })

var ans = new Promise(function(res,rej){
    return res("Open the Door")
})

var p1 = ans.then(function(data )
{
    console.log(data);
   return new Promise(function(res,rej){
    
   return res("Close the Door..")
})
})
var p2  = p1.then(function(data )
{
    console.log(data);
   return new Promise(function(res,rej){
    
   return res("Make Food")
})
})

var p3  = p2.then(function(data )
{
    console.log(data);
   return new Promise(function(res,rej){
    
   return res("go to sleep")
})
})
p3.then(function(data)
{
    console.log(data)
})