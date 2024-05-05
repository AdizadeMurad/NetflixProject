const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const UsersModel = require('./models/users')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users");


app.post("/Login", (req,res) => {
   const { email,password }=req.body;
   UsersModel.findOne({email:email})
   .then(user =>{
    if(user){
        if (user.password===password) {
            res.json("Success")
            
        }
        else{
            res.json("Password is incorrect")
        }
    }
    else{
        res.json("No exist")
    }
   })
})

app.post('/Register',(req,res)=>{
    UsersModel.create(req.body)
.then(users => res.json(users))
.catch (err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running");
})