const { Drivers, Teams } = require('../../db');

const createDrivers = async (data) => {
  const teams = await Teams.findAll({ where: { name: data.teams } });
  const driverCreated = {
    surname: data.surname,
    forename: data.forename,
    image: data.image,
    dob: data.dob,
    nationality: data.nationality,
    teams: data.teams,
    description: data.description
  }
  const newDriver = await Drivers.create(driverCreated);
  newDriver.addTeams(teams)
  if (newDriver) return newDriver;
  else return null;
};

module.exports = createDrivers;