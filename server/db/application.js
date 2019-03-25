const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('application', {
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  method: {
    type: Sequelize.STRING,
    defaultValue: 'linkedIn'
  },
  rejected: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});