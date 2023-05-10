const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const mysql = require('mysql2/promise')

app.use(cors());
app.use(bodyParser.json())
app.use(express.json())

app.listen(3001, ()=>{
    console.log('Rodando server')
})

//conectando ao servidor

const conecction = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'db_users'
});

module.exports = conecction;

const allItems = async () => {
    const [query] = await conecction.execute('SELECT * FROM db_users.tb_users');

    return query;
}

module.exports = allItems;

app.get('/', async (req, res)=> {
    const query = await allItems();
    return res.status(201).json(query);
})




// app.post('/users',(req, res)=> {
//     const {user} = req.body;


//     if(!{user}) {
//         res.status(400).send({message: 'error server'})
//     } 

//     res.status(200).send(user)
//     console.log({user})

// })

// app.get('/users',(req, res)=> {
//     // const {username} = req.params;
//     const {user} = req.body
//     // console.log(user)
//      return res.status(200).json({user})
// })

