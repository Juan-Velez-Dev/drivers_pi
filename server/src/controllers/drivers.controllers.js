const getDrivers = (req, res) => {
  res.send('getting drivers');
};

const getDriversById = (req, res) => {
  res.send('gettind drivers by id');
};

module.exports = { getDrivers, getDriversById };