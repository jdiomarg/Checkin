const { Sequelize, DataTypes } = require('sequelize');

// Establish db connection
// Create database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  port: 5432,
  database: 'Registration',
  logging: false,
});

// Export component
module.exports = { db, DataTypes };