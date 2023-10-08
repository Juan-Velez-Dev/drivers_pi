const { getDrivers, getDriversById } = require('../controllers/drivers.controllers');
const { Router } = require('express');

const router = Router();

router.get('/drivers', getDrivers);
router.get('/drivers/:id', getDriversById);
router.get('/drivers/name?="..."');
router.post('/drivers');


module.exports = router;