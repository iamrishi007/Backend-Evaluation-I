const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connection = require('./config/db')
const userRouter = require('./Routes/user.route') 
const booksRouter = require('./Routes/books.route')
const borrowRouter = require('./Routes/borrow.route')
const authorRouter = require('./Routes/author.route')

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/user', userRouter)


app.get('/', (req, res) => {
    res.send("Server is running")
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Connected to the database`);
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log(`Failed to connect to the database`)
    }
});
