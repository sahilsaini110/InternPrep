const mongoose = require('mongoose')

async function connectMongoDb(url){
    return mongoose.connect(url)
    .then(()=>console.log("connect ho gya bhai m... abb bol kya krna h"))
    .catch((err)=>console.log("mongo error"));
}

module.exports= {connectMongoDb,};