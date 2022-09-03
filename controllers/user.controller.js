const { request } = require('express');
const { User } = require('../models/user.model')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  };
};

//Create user for database
const createUser = async (req, res) => {
  try {
    const { name, position } = req.body;

    const newUser = await User.create({ name, position });

    // 201 -> Success and a resource has been created
    res.status(201).json({
      status: 'success',
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (req, res) => {
  try {
    const { name } = request.body;
    const { id } = request.params;

    //Check if the user exist before update
    const user = await User.findOne({ where: { id } });

    //if user doesn't exist, send error message 
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User no found',
      });
    }

    //Method 1: update by usingthe model
    //await  User.update({name}, {where: {id}});

    //Method 2: Update using a model instance
    await User.update({ name });

    res.status(200).json({
      status: 'success',
      data: { updateUser },
    });
  } catch (error) {
    console.log(error)
  }
}


//2. Delete users from database

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user nor found',
      });
    }


    // If user exist,remove it from database
    // await user.destroy({where: {id}})

    // Method 3 Soft Delete
    await user.update({ status: 'deleted' });

    // res.status(204).json({
    res.status(200).json({
      status: 'success',
      message: 'User was deleted'
    });

    //send error message
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };