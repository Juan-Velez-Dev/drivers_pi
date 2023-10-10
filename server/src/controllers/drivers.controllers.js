const axios = require('axios');
const { Drivers, Teams } = require('../db');

const getDrivers = async (req, res) => {
  try {
    const { data } = await axios('http://localhost:5000/drivers');
    // console.log(response);
    res.send('getting drivers');
  } catch (error) {

  }
};

const getDriversById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios(`http://localhost:5000/drivers/${id}`);
    // const filter = Drivers.filter(driver => driver.id === id);
    if (data) {
      return res.status(200).json(data)
    }
    // if (filter) {
    //   return res.status(200).json(filter)
    // }
  } catch (error) {
    return res.status(400).send(error.message);
  }

};

const createDriver = async (req, res) => {
  try {
    const data = { ...req.body }
    const newDriver = await Drivers.create(data)
    console.log(newDriver)
    return res.status(200).send(data)
  } catch (error) {
    // console.log(error)
    return res.status(400).json(error)
  }
}

// puedo hacer la logica con un condicional que ejecute las busquedas

module.exports = { getDrivers, getDriversById, createDriver };