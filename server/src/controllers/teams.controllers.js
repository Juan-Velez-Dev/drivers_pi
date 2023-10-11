const axios = require('axios');
const { Drivers, Teams } = require('../db');

const getTeams = async (req, res) => {
  await axios('http://localhost:5000/teams');
  const teams = ''
}

module.exports = getTeams