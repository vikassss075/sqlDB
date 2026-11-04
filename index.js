const express = require('express');
const app = express();
app.use(express.json());
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');



app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.use('/students', studentRoutes);
app.use('/users', userRoutes);
app.use('/buses', userRoutes);


app.listen(3000,)