const axios = require('axios');
const convertAPI = require('../../helpers/convertAPI')

const getDrivers = async () => {
  try {
    const { data } = await axios(`http://localhost:5000/drivers`);
    let result = data?.map((driver) => {
      return convertAPI(driver)
    })
    return result
  } catch (error) {
    return null;
  }
};

module.exports = getDrivers;