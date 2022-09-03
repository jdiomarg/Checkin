const { Registration } = require('../models/registration.model')

//Get All User
const getAllRegistration = async (req, res) => {
  try {
    const registration = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  };
};

//Search for specific user
const searchRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const exit = await Registration.findOne({ where: { id: id } });

    if (!exit) {
      return res.status(201).json({
        status: 'error',
        message: 'User No Found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//User Entrance Time
const createRegistration = async (req, res) => {
  try {
    const { userId, name, entranceTime } = req.body;

    const newReg = await Registration.create({ userId, name, entranceTime });

    res.status(201).json({
      status: 'Working',
      data: { newReg },
    });
  } catch (error) {
    console.log(error);
  }
}

//User Exit Time
const exitRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTime, userId } = req.body;

    const exit = await Registration.findOne({ exitTime, userId }, { where: { id: id } });

    if (!exit) {
      return res.status(404).json({
        status: 'error',
        message: 'User no Found',
      });
    }

    await exit.update({ exitTime })

    res.status(200).json({
      status: 'success',
      data: { exit },
    });
  } catch (error) {
    console.log(error)
  }
}

//User Cancel Registration Time
const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const cancelReg = await Registration.findOne({ where: { id: id } });

    if (!cancelReg) {
      return res.status(404).json({
        status: 'error',
        message: 'User no Found',
      });
    }

    await cancelReg.update({ status: 'Registration Canceled' })

    res.status(200).json({
      status: 'success',
      message: 'Your Registration was Canceled',
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllRegistration, createRegistration, searchRegistration, updateRegistration, exitRegistration };