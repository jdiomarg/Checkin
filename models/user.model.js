const { db, DataTypes } = require('../utils/database.util');

const User = db.define('user', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
  },
});

// Export component
module.exports = { User };