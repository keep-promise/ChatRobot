const sequlize = require('../db/sequelize');
const dbConnection = require('../db/connection');

const initRelition = () => {

}

const initDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnection();
      initRelition();
      await sequlize.sync({ alter: true });
      resolve();
    } catch(error) {
      console.log(error);
      reject(error)
    }
  })
}

module.exports = initDB;