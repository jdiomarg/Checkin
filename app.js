const express = require('express');

//Router
const { userRouter } = require('./routes/users.routes');
const { registrationRouter } = require('./routes/registration.routes');


//Initialize our server
const app = express();

// Convert app to router
app.use('/users', userRouter);
app.use('/registration', registrationRouter);

//Enable Express app to receive JSON data
app.use(express.json()); // Middleware

//Catch non-existing endpoints
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} This don't exist in our server`,
  });
});

module.exports = { app };