const axios = require('axios');
const server = require('./src/server');
const { sequelize } = require('./src/db');

const PORT = 3001;

server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false })
    console.log(`server listen in port: ${PORT}`)
  } catch (error) {
    console.log(error.message)
  }
})