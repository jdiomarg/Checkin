const express = require('express');

// controller
const { createRegistration, getAllRegistration, searchRegistration, updateRegistration, exitRegistration } = require('../controllers/registration.controller');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegistration);

registrationRouter.get('/:id', searchRegistration);

registrationRouter.post('/', createRegistration);

registrationRouter.patch('/:id', updateRegistration,)

registrationRouter.delete('/:id', exitRegistration)

module.exports = { registrationRouter };