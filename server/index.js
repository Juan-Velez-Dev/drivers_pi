const server = require('./src/server');
const { sequelize } = require('./src/db');
const PORT = 3001;

server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: true })
    console.log(`server listen in port: ${PORT}`)
  } catch (error) {
    return error;
  };
});