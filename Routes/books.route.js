const express = require('express')
const Book = require('../models/model.books')
const bookRouter = express.Router()


bookRouter.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find().populate('author').populate('borrowedBy')
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving books',
            error: error.message,
        });
    }
});
