const express = require('express');

//controllers
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.post('/', createUser);

userRouter.patch('/:id', updateUser);

userRouter.delete('/', deleteUser);

module.exports = { userRouter };