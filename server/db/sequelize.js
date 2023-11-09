
const { Sequelize } = require('sequelize');

const env = process.env;
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DIALECT, DB_HOST, DB_PORT} = env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  logging: false,
  port: DB_PORT
});

module.exports = sequelize;
