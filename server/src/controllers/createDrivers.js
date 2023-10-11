const { Drivers, Teams } = require('../db');

//* Controllers

const createDrivers = async (data) => {
  // string enviado en arr y se mapea
  // por cada elemento se busca en DB => 
  const newDriver = await Drivers.create(data)
  if (newDriver) return newDriver;
  return error.message;
};

module.exports = createDrivers;