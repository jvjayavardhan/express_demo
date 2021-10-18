const express = require('express')
const app = express();

app.get("/",(req,res)=>{
// get handler
    res.send("<h1>Welcome</h1>");    
})

app.get("/login",(req,res)=>{
    // get handler
    res.send("<h1>Welcome Login</h1>");    
})
app.post("/login",(req,res)=>{
    // post handler
})

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("App running at port 5000")
    }
})