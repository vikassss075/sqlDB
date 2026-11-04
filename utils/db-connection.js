const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@dev2026',
    database: 'testDB',
    multipleStatements: true
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");

        const creationQuery = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(255)
        );
        
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber INT,
            totalSeats INT
        );

        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        );

        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(20)
        );
    `;


    connection.query(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is created");
    });


});

module.exports = connection;