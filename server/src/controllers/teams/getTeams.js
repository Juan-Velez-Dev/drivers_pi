const axios = require('axios');
const { Drivers, Teams } = require('../../db');

const getTeams = async () => {
  try {
    const teams = [];
    const regex = /\s*,\s*/;
    const { data } = await axios(`http://localhost:5000/drivers`);
    // mapeamos la {data} para traernos los teams de los drivers
    data.map(driver => {
      if (driver.teams) driver.teams.split(regex).map(driver => teams.push(driver))
    });
    const teamsList = [...new Set(teams)];
    // creamos en DB los Teams
    for (let i = 0; i < teamsList.length; i++) {
      await Teams.create({ name: teamsList[i] });
    }
    return teamsList;

  } catch (error) {
    return null
  }
};

module.exports = getTeams;