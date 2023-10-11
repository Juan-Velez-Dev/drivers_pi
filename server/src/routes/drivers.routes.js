const { createDriverHandler, getDriversHanlder, getDriversByIdHanlder, getDriversByNameHandler } = require('../handlers/driversHandlers');

const { Router } = require('express');

const router = Router();

// router.get('/drivers', getDrivers);
router.get('/drivers', getDriversHanlder);
router.get('/driver/:id', getDriversByIdHanlder);
router.get('/driver/', getDriversByNameHandler);
router.post('/driver', createDriverHandler);
router.put('/drivers/:id');
router.delete('/driver/:id');


module.exports = router;