const { personas } = require('./mock');

const persona = async (req, res) => {
  res.json({
    status: 200,
    sucess: true,
    data: [personas]
  })
}

module.exports = {
  persona
}