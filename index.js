const fs=require('fs');
const checkline=require('./util');
const para=require('./parameter');
const p =new Promise((resolve,reject)=>{
    var newdata='';
    fs.readFile('feature.txt','utf-8',(err,data)=>{
        data.toString().split('\n').forEach((line,index,arr)=>{
            newdata+=checkline(line);  //utility function to check for Given,When and Then 
            }) 
        resolve(newdata);
    })
});
    
    
  p.then((data)=>{
    
    fs.appendFile('sample.js',data,'utf-8',(err)=>{
        if(err){
            console.log('error writing file');
        }
        console.log("Successfully appended");
    })
  })  
    


