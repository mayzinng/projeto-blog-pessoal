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

// const postUser = async (user_name, email, pass, nickname) => {

//     const [query] = await conecction.execute("INSERT INTO tb_users ( user_name, email, user_password, nickname ) VALUES ( `${user_name}, ${email}, ${pass}, ${nickname}` )");

//     return query;
// }

module.exports = allItems;

app.get('/', async (req, res)=> {
    const query = await allItems();
    return res.status(200).json(query);
})

app.post('/', async (req, res) => {
    const {name} = req.body;
    const {email} = req.body;
    const {password} = req.body;
    const {username} = req.body;

    // const query = await postUser(name, email, password, nickname);

    let sql = "INSERT INTO tb_users ( user_name, email, user_password, nickname ) VALUES ( ?, ?, ?, ?)"

    conecction.query(sql, [name, email, password, username], (err, result)=> {
        console.log(err)
    })

    return res.status(201);
})


