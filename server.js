const express=require("express");
var bodyParser=require("body-parser");
const path=require("path");
const port=3000;
const app=express();
const bcrypt=require("bcryptjs");
app.use(
    bodyparser.urlencoded({
        extended:true,
    })
);
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log('listening to port ${port}');
})
