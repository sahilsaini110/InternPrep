const fs = require("fs")
const http = require("http")


fs.appendFile("./test.txt", "i am learning js", (err)=>{
    console.log("hi");
})

const server = http.createServer((req, res)=>{
    res.end(`${Date.now()}"hello world!"`)
})

server.listen(8000);