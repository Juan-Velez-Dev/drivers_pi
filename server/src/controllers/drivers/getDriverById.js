const { Drivers, Teams } = require('../../db');
const axios = require('axios')
//34345ec0-700b-47ed-8df5-7f7b4e6efccd
const getDriversById = async (id) => {
  if (id.includes('-')) {
    const filterData = await filterData.push(Drivers.findAll({ where: { id: id, }, include: [{ model: Teams, through: 'drivers_teams' }] }));
    if (filterData) return filterData;
  }
  const { data } = await axios(`http://localhost:5000/drivers/${id}`);
  if (data) return data;
  return null;
};


module.exports = getDriversById;