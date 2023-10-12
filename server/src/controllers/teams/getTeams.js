const axios = require('axios');
const { Drivers, Teams } = require('../../db');

const getTeams = async () => {
  const teams = [];
  const regex = /\s*,\s*/;
  const { data } = await axios(`http://localhost:5000/drivers`);
  data.map(driver => {
    if (driver.teams) driver.teams.split(regex).map(driver => teams.push(driver))
  });
  const teamsList = [...new Set(teams)];
  if (!teams) return null;
  for (let i = 0; i < teamsList.length; i++) {
    await Teams.create({ name: teamsList[i] });
  }
  return teamsList;
};

module.exports = getTeams;