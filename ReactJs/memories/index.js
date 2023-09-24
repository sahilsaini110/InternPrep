const PORT = 8000
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//get all the rest data
app.get('/', (req, res)=>{
    const url= process.env.ENDPOINT
    const options = {
        method: 'GET',
        headers: {
            Accept : 'application/json',
            'x-Cassandra-Token': process.env.KEY
             }
    }
    fetch(url, options)
       .then(response => response.json())
       .then(json => res.json(json))
       .catch(err => console.log('error:' + err))
}) 

function notFound(req, res, next){
    res.status(404)
    const error = new Error('oops... not found')
    next(error)
}
function errorHandler(error,req,res){
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, ()=>console.log('server is running'))