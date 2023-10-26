const createDrivers = require('../controllers/drivers/createDrivers')
const getDrivers = require('../controllers/drivers/getDrivers');
const getDriversById = require('../controllers/drivers/getDriverById')
const getDriverByName = require('../controllers/drivers/getDriverByName')

//* GET ALL

const getDriversHanlder = async (req, res) => {
  try {
    const response = await getDrivers();
    if (response) return res.status(200).json(response);
    if (!response) throw new Error('Drivers Not Found!');
  } catch (error) {
    return res.status(500).json(error.message);
  };
};

//* GET BY ID

const getDriversByIdHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriversById(id);
    if (driver) return res.status(200).json(driver);
    if (!driver) throw new Error('Driver Not Found!');
  } catch (error) {
    return res.status(500).json(error.message)
  };
};

//* GET BY NAME

const getDriversByNameHandler = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    const driver = await getDriverByName(name);
    if (driver) return res.status(200).json(driver);
    if (!driver) throw new Error('Driver Not found');
  } catch (error) {
    return res.status(500).json(error.message);
  };
};

//* POST

const createDriverHandler = async (req, res) => {
  try {
    const data = { ...req.body };
    const newDriver = await createDrivers(data);
    if (newDriver) return res.status(201).json(newDriver);
    if (!newDriver) throw new Error('driver Could Not Be Breated!');
  } catch (error) {
    return res.status(500).json(error.message);
  };
};

module.exports = { getDriversHanlder, createDriverHandler, getDriversByIdHanlder, getDriversByNameHandler };