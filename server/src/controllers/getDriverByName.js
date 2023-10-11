const { Drivers, Teams } = require('../db');
const axios = require('axios')

const getDriversByName = async (query) => {
  const { data } = await axios(`http://localhost:5000/drivers`);
  const filter = await data.filter(driver => driver.name.forename.toLowerCase().includes(query));
  if (filter) {
    const drivers = filter.slice(0, 15);
    return drivers
  };

  // const filterDb = Drivers.findAll({ where: { 'name.surname': query } });
  // if (filterDb) {
  //   const drivers = filterDb.slice(0, 15);
  //   return drivers
  // };
  return false;

};

module.exports = getDriversByName;