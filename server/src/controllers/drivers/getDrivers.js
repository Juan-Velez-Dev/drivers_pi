const axios = require('axios');

const getDrivers = async () => {
  try {
    const { data } = await axios(`http://localhost:5000/drivers`);
    for (const driver of data) {
      if (!driver.image.url.length) {
        driver.image.url = null
        driver.image.imageby = "default-image"
      };
      return data;
    };
  } catch (error) {
    return null;
  }
};

module.exports = getDrivers;