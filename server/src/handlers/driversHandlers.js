const createDrivers = require('../controllers/drivers/createDrivers')
const getDrivers = require('../controllers/drivers/getDrivers');
const getDriversById = require('../controllers/drivers/getDriverById')
const getDriverByName = require('../controllers/drivers/getDriverByName')

//* GET ALL

const getDriversHanlder = async (req, res) => {
  try {
    const response = await getDrivers();
    if (!response) throw new Error('Drivers Not Found!');
    if (response) return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json('Cant get drivers!');
  };
};

//* GET BY ID

const getDriversByIdHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriversById(id);
    if (!driver) throw new Error('Driver Not Found!');
    if (driver) return res.status(200).json(driver);
  } catch (error) {
    return res.status(500).json('Cant get drivers by id!')
  };
};

//* GET BY NAME

const getDriversByNameHandler = async (req, res) => {
  try {
    const name = req.query.name.toLowerCase();
    const driver = await getDriverByName(name);
    if (!driver) throw new Error('Driver Not found');
    if (driver) return res.status(200).json(driver);
  } catch (error) {
    return res.status(500).json('Cant get drivers by name!');
  };
};

//* POST

const createDriverHandler = async (req, res) => {
  try {
    const data = { ...req.body };
    const newDriver = await createDrivers(data);
    if (!newDriver) throw new Error('driver Could Not Be Breated!');
    if (newDriver) return res.status(201).json(newDriver);
  } catch (error) {
    return res.status(500).json(error.message); // 'Cant create drivers!'
  };
};

module.exports = { getDriversHanlder, createDriverHandler, getDriversByIdHanlder, getDriversByNameHandler };