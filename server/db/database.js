'use strict'


const chalk = require('chalk')
const Sequelize = require('sequelize')


console.log(chalk.yellow('Opening database connection'))

const db = new Sequelize(`postgres://localhost:5432/rejectionTracker`, {
  logging: false // so we don't see all the SQL queries getting made
})
//postgres://apaflevp:aKaHRQbbNTwZ-jwV2EgZzOKjyEHKiNpm@isilo.db.elephantsql.com:5432/apaflevp



module.exports = db
