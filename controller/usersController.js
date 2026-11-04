const connection = require('../utils/db-connection');

const addUser = (req, res)=>{
    const {name, email} = req.body;
    const userCreation ="INSERT into users (name, email) values (?,?)";

    connection.execute(userCreation, [name, email], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        res.status(200).send('user created');
    })
}
const getUser = (req, res)=>{
    const getUsers ="select * from users";

    connection.execute(getUsers, (err)=>{
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
    addUser,
    getUser
}