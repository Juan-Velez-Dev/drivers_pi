const { Drivers, Teams } = require('../db');
const axios = require('axios')

const getDriversById = async (id) => {
  const { data } = await axios(`http://localhost:5000/drivers/${id}`);
  if (data) return data;
  const filterData = await Drivers.findByPk(id, { include: Teams });
  if (filterData) return filterData;

  throw new Error('Not driver ID')

};


module.exports = getDriversById;