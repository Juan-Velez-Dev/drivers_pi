const { Drivers, Teams } = require('../../db');

const createDrivers = async (data) => {
  const teams = await Teams.findAll({ where: { name: data.teams } });
  const newDriver = await Drivers.create(data);
  newDriver.addTeams(teams)
  if (newDriver) return newDriver;
  else return null;
};

module.exports = createDrivers;