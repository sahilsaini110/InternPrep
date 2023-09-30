const express = require('express')
// const users = require('./MOCK_DATA.json')
// const mongoose = require('mongoose')
const app = express();
// const fs = require('fs')
const userRouter = require('./routes/user')
const { connectMongoDb } = require('./config')
const { logReqRes} = require('./middlewares/index')

//connection
connectMongoDb("mongodb://127.0.0.1:27017/test");

 //connection
// mongoose.connect('mongodb://127.0.0.1:27017/test')
// .then(()=>console.log("connect ho gya bhai m... abb bol kya krna h"))
// .catch((err)=>console.log("mongo error"));

// //schema
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     gender: {
//         type:String,
//     },
//     title:{
//         type:String,
//     },
    
// },{timestamps:true});

// //model
// const User = mongoose.model("user", userSchema);



//using mongodb

// app.get('/users', async (req, res)=>{
//     const allDbUsers = await User.find({});
//      const html = `
//      <ul>
//       ${allDbUsers.map((user) => `<li>${user.firstName} ${user.email}</li>`).join("")}
//      </ul>
//      `
//     return res.send(html)
// })


// app.get('/api/users', async (req, res)=>{
//     const allDbUsers = await User.find({});
//     return res.json(allDbUsers)
// })


// app.get("/api/users/:id", async (req, res)=>{
//     const user = await User.findById(req.params.id)
//     if(!user) return res.status(404).json({error: "ye kya maang rha h bhai, ye kha se laau hai hi nhi ye to."});
//     return res.json(user)
// })  


// //complete
// app.patch("/api/users/:id", (req, res)=>{
    
// })

// //complete
// app.delete("/api/users/:id", (req, res)=>{
    
// })

// app.post("/api/users", async (req, res)=>{
//     const body = req.body;
//     if(!body||!body.firstName||!body.lastName||!body.email||!body.gender||!body.title){
//         return res.status(400).json({msg: "sab bhar na aalsi..."})
//     }
//     const result = await User.create({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         gender: body.gender,
//         title: body.title,
//     });
//     console.log("result", result);
//     return res.status(201).json({msg:"add krdiya m,  u no worry"})
// });




//using text json 

// app.get('/users', (req, res)=>{
//      const html = `
//      <ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//      </ul>
//      `
//     return res.send(html)
// })


// //rest api

// app.get('/api/users', (req, res)=>{
//     return res.json(users)
// })


// app.get("/api/users/:id", (req, res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })


// app.post("/api/users", (req, res)=>{
//     const body = req.body;
//     users.push({...body, id: users.length+1});
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, result) =>{
//         return  res.json({status: "done", id : users.length}) 
//     })
// })

// //complete
// app.patch("/api/users/:id", (req, res)=>{
//     const id = req.params.id;
//     const user = users.find((user)=> user.id === id);
//     return  res.json({status: "kr rha"})
    
// })

// //complete
// app.delete("/api/users/:id", (req, res)=>{
//     return  res.json({status: "kr rha"}) //created status code
// })

//route



//middleware - plugin(analogy)
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users", userRouter);

//port
app.listen(8000, ()=>{
    console.log("server i running on 8000...")
})