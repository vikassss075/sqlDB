const connection = require('../utils/db-connection');

const addBus = (req, res)=>{
    const {busNumber, totalSeats} = req.body;
    const busCreation ="INSERT INTO buses (busNumber, totalSeats) VALUES (?,?)";

    connection.execute(busCreation, [busNumber, totalSeats], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        res.status(200).send('bus created');
    })
}
const getBuses = (req, res)=>{
    const {availableSeats} = req.params;
    const getUsers ="select * from buses where totalseats> ?";

    connection.execute(getUsers, [availableSeats], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        res.status(200).send('user list');
    })
}

module.exports ={
    addBus,
    getBuses
}