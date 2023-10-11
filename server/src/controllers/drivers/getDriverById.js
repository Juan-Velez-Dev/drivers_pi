const { Drivers, Teams } = require('../../db');
const axios = require('axios')
//34345ec0-700b-47ed-8df5-7f7b4e6efccd
const getDriversById = async (id) => {
  try {
    if (id.includes('-')) {
      //! Falta la busqueda en la base de datos incluyendo los TEAMS
      const filterData = await Drivers.findByPk(id);
      if (filterData) return filterData;
    }
    const { data } = await axios(`http://localhost:5000/drivers/${id}`);
    if (data) return data;
  } catch (error) {
    return null;
  };
};


module.exports = getDriversById;