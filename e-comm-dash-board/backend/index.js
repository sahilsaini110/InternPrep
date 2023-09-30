const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    console.log("running");
});

app.listen(8000,()=>{
    console.log("running.....")
})