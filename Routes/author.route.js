const express = require('express')
const Author = require('../models/model.auther')

const authorRouter = express.Router()


authorRouter.post('/api/authors', async (req, res) => {
     const { name, biography, dateOfBirth, nationality } = req.body

     try {
          const newAuthor = new Author({
               name,
               biography,
               dateOfBirth,
               nationality,
          });

          await newAuthor.save();

          res.status(201).json({
               message: 'Author created successfully',
               author: newAuthor,
          });
     } catch (error) {
          res.status(500).json({
               message: 'Error creating author',
               error: error.message,
          });
     }
});

module.exports = authorRouter;
