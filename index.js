const express =require("express")

const {Pizza} = require('./models/pizzamodel')

const db = require("./db")

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("server is working")
})
app.get('/getpizzas',(req,res)=>{
Pizza.find({},(err,docs)=>{

if(err){
    console.log(err);
}
else{
    res.send(docs)
}
})
})

app.listen(5000,()=>{
    console.log("server started st port number 5000");
})