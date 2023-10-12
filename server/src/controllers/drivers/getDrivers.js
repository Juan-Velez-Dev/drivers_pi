const axios = require('axios');

const getDrivers = async () => {
  try {
    const { data } = await axios(`http://localhost:5000/drivers`);
    for (const driver of data) {
      if (!driver.image.url.length) {
        driver.image.url = "https://i.pinimg.com/564x/20/b1/dc/20b1dc6fe68dbb42c8ec7be051ab098a.jpg"
        driver.image.imageby = "default-image"
      };
      return data;
    };
  } catch (error) {
    return null;
  }
};

module.exports = getDrivers;