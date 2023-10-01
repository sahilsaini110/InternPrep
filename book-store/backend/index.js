const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"password",
    database:"testdb"
})
 

app.get('/',(req, res)=>{
    res.json("hello json hai ye");
});


app.get('/books', (req, res)=>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.post('/books', (req, res) =>{
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
    const values = [req.body.title, req.body.desc, req.body.cover]

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.status(201).json("done created")
    })
})


app.delete('/books/:id', (req, res)=>{
    const id = req.params.id;
    const q = "delete FROM books where id = ?"
    db.query(q,[id],(err, data)=>{
        if(err)return res.json(err)
        return res.json("deleted successfuly")
    })
})

app.put('/books/:id', (req, res)=>{
    const id = req.params.id;
    const q = "update books set `title` =?, `desc`=?, `cover`=? where id = ?"
    const values=[
        req.body.title ,
        req.body.desc,
        req.body.cover,
    ]
    db.query(q, [...values, id], (err, data)=>{
        if(err)return res.json(err)
        return res.json("Updated successfuly")
    })
})

app.listen(8800, ()=>{
    console.log("server is running..on 8800");
})