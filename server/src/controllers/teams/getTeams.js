const axios = require('axios');
const { Drivers, Teams } = require('../../db');

const getTeams = async () => {
  const { data } = await axios(`http://localhost:5000/drivers`);
  const teams = data.map(driver => driver.teams);
  if (!teams) return null;
  for (let i = 0; i < teams.length; i++) {
    if (teams[i]) {
      await Teams.create({ 'name': teams[i] });
    };
  }
  return teams;
};

module.exports = getTeams;