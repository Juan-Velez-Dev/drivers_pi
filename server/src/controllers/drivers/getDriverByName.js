const { Drivers, Teams } = require('../../db');
const axios = require('axios')

const getDriversByName = async (name) => {
  //* Buscamos en API
  const { data } = await axios(' http://localhost:5000/drivers')
  const filter = await data.filter(driver => driver.name.surname.toLowerCase().includes(name));
  if (filter.length) return filter.slice(0, 15)
  //* Buscamos en DB
  const filterDb = await Drivers.findAll({ where: { 'name': name } });
  if (filterDb.length) return filterDb.slice(0, 15)
  else return null;
};

module.exports = getDriversByName;