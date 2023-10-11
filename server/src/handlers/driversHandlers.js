const createDrivers = require('../controllers/createDrivers')
const getDrivers = require('../controllers/getDrivers');
const getDriversById = require('../controllers/getDriverById')
const getDriverByName = require('../controllers/getDriverByName')

//* GET

const getDriversHanlder = async (req, res) => {
  try {
    const response = await getDrivers()
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

//* BY ID

const getDriversByIdHanlder = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await getDriversById(id);
    if (driver) return res.status(200).json(driver)
    console.log(driver)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

//* BY NAME

const getDriversByNameHandler = async (req, res) => {
  try {
    const query = req.query.name.toLowerCase();
    const driver = await getDriverByName(query);
    console.log(driver)
    if (driver) return res.status(200).json(driver)
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

//* CREATE

const createDriverHandler = async (req, res) => {
  try {
    const data = { ...req.body }
    const newDriver = await createDrivers(data)
    console.log(newDriver)
    return res.status(200).send(newDriver)
  } catch (error) {
    return res.status(400).json(error)
  }
};


module.exports = { getDriversHanlder, createDriverHandler, getDriversByIdHanlder, getDriversByNameHandler }