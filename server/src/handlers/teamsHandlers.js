const getTeams = require('../controllers/teams/getTeams');

const getTeamsHandler = async (req, res) => {
  try {
    const response = await getTeams();
    if (!response) throw new Error('Teams Not Found!');
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getTeamsHandler;