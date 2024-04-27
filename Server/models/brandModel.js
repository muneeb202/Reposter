const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Brand = sequelize.define('Brand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  brandName: {
    type: DataTypes.STRING
  },
  companyName: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  marketingBudget: {
    type: DataTypes.STRING
  },
  goal: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'brands',
  timestamps: false,
  underscored: true
});

// User.sync()

module.exports = Brand;
