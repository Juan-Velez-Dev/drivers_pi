const { Drivers, Teams } = require('../../db');
const axios = require('axios')

const getDriversByName = async (name) => {
  const { data } = await axios(`http://localhost:5000/drivers`);
  const filter = await data.filter(driver => driver.name.forename.toLowerCase().includes(name));
  if (filter.length) {
    const drivers = filter.slice(0, 15);
    return drivers;
  };
  const filterDb = await Drivers.findAll({ where: { 'name': name } });
  if (filterDb.length) {
    const drivers = filterDb.slice(0, 15);
    return drivers;
  };
  return null;
};

module.exports = getDriversByName;