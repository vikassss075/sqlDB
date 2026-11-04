const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@dev2026',
    database: 'testDB'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");

    const creationQuery = `create table students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`

    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is created");
    })


})

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.listen(3000,)