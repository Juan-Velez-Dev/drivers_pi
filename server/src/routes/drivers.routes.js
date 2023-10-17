const { createDriverHandler, getDriversHanlder, getDriversByIdHanlder, getDriversByNameHandler } = require('../handlers/driversHandlers');
const { Router } = require('express');
const router = Router();

router.get('/drivers', getDriversHanlder);
router.get('/drivers/:id', getDriversByIdHanlder);
router.get('/driver/', getDriversByNameHandler);
router.post('/driver', createDriverHandler);

module.exports = router;