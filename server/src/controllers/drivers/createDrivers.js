const { Drivers, Teams } = require('../../db');

//* Controllers

const createDrivers = async (data) => {
  const teams = await Teams.findAll({ where: { id: data.teams } });
  const newDriver = await Drivers.create(data);
  newDriver.addTeams(teams)
  if (newDriver) return newDriver;
  return null;
};

module.exports = createDrivers;