const { getDrivers, getDriversById, createDriver } = require('../controllers/drivers.controllers');
const { Router } = require('express');

const router = Router();

// router.get('/drivers', getDrivers);
router.get('/drivers', getDrivers);
router.get('/drivers/:id', getDriversById);
router.post('/drivers', createDriver);
router.put('/drivers/:id');
router.delete('/drivers/:id');


module.exports = router;