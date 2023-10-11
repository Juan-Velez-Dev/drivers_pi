const axios = require('axios');

const getDrivers = async () => {
  const { data } = await axios(`http://localhost:5000/drivers`);
  for (const driver of data) {
    if (!driver.image.url.length) {
      driver.image.url = "Image-Default"
      driver.image.imageby = "default-image"
    };
    return data;
  };
  return null;
};

module.exports = getDrivers