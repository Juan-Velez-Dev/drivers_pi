const axios = require('axios');

const getDrivers = async () => {
  try {
    const { data } = await axios(`http://localhost:5000/drivers`);
    for (const driver of data) {
      // validamos que NO tengan imagen && creamos imagen
      if (!driver.image.url.length) {
        driver.image.url = 'default-image'
        driver.image.imageby = "default-image"
      };
      return data;
    };
  } catch (error) {
    return null;
  }
};

module.exports = getDrivers;