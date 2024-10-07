const express = require('express')
const UserModel = require('../models/model.user')
const userRouter = express.Router()

userRouter.post('/api/auth/register', async (req, res) => {
     const { username, email, name, password } = req.body;
     try {

          const user = new UserModel({
               username,
               email,
               name,
               password
          })

          await user.save()

          res.status(200).json({
               massage: 'user register successfully'
          })

     } catch (error) {
          res.status(500).json({
               massage: 'please register first'
          })
     }
})

userRouter.post('/api/auth/register', async (req, res) => {
     const { username, password } = req.body
     try {
          const user = await UserModel.findOne({ username, password })

          if (!user) {
               res.status(400).json({
                    massage: "invilde email or password"
               })
          }
          else {
               res.status(200).json({
                    massage: 'user login successfully'
               })
          }
     } catch (error) {
          res.status(500).json({
               massage: 'please login first'
          })
     }
})

const getAllUsers = async (req, res) => {
     try {
          const users = await UserModel.find();
          res.status(200).json(users);
     } catch (error) {
          res.status(500).json({ message: 'Error retrieving users', error });
     }
};

userRouter.get('/api/auth/users', getAllUsers);


userRouter.get('/api/auth/user/:id', async (req, res) => {
     try {
          const userId = req.params.id;
          const user = await UserModel.findById(userId);

          if (user) {
               res.status(200).json(user);
          } else {
               res.status(404).json({
                    message: 'User not found'
               });
          }
     } catch (error) {
          res.status(500).json({
               message: 'Error retrieving user data'
          });
     }
});

module.exports = userRouter