const connection = require("../utils/db-connection");

const addEntries = (req,res)=>{
    const {email, name} = req.body;
    const insertQuery = 'INSERT INTO students (email, name) VALUES (?,?)'
    connection.execute(insertQuery, [email, name], (err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        console.log('values created');
        res.status(200).send(`Student with name ${name} sucessfully added`);

    })
}

const updateEntries = (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const updateQuery = "UPDATE students set name = ? where id = ?"
    connection.execute(updateQuery, [name, id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return
        }

        if(result.affectedRows===0){
            res.status(404).send('Student not found');
            return;
        }

        res.status(200).send('User has been updated');
    })
}

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = "DELETE from students where id = ?";
    connection.execute(deleteQuery, [id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        if(result.affectedRows ===0){
            res.status(404).send('student not found');
            return;
        }

        res.status(200).send('user deleted');
    })
}
module.exports={
    addEntries,
    updateEntries,
    deleteEntry
}