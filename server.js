const express = require('express');

const mongoose = require('mongoose');

const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());

mongoose.connect('mongodb+srv://tpaung:iz0kz0dVhjJeOtBx@cluster0.rckobdo.mongodb.net/?retryWrites=true&w=majority')
.then(r => {
    console.log('DB connected...');

    server.get('/', (req, res) => {
        res.status(200).json({
            message:'Hello World from TPAung!!'
        });
    });
    
    server.listen(5005, () => console.log('Now, my node server is running...'));
})
.catch(err => {
    console.log(err)
});