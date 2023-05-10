const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())

app.listen(3001, ()=>{
    console.log('Rodando server')
})

app.post('/users',(req, res)=> {
    const {user} = req.body;


    if(!{user}) {
        res.status(400).send({message: 'error server'})
    } 

    res.status(200).send(user)
    console.log({user})

})

app.get('/users',(req, res)=> {
    // const {username} = req.params;
    const {user} = req.body
    // console.log(user)
     return res.status(200).json({user})
})

