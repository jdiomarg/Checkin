const { db, DataTypes } = require('../utils/database.util');

// Define Post Model
const Registration = db.define('registration', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'disabled',
    allowNull: false,
  },
});

// Export component
module.exports = { Registration };