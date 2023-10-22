const { Drivers, Teams } = require('../../db');
const axios = require('axios')
const getDriversById = async (id) => {
  //* Buscar en DB
  if (id.includes('-')) {
    const filterData = await filterData.push(Drivers.findAll({ where: { id: id, }, include: [{ model: Teams, through: 'drivers_teams' }] }));
    if (filterData) return filterData;
  }
  //* Buscar en API
  const { data } = await axios(`http://localhost:5000/drivers/${id}`);
  if (data) return data;
  return null;
};


module.exports = getDriversById;