const { Router } = require('express');
const getTeamsHandler = require('../handlers/teamsHandlers');
const router = Router();

router.get('/teams', getTeamsHandler);

module.exports = router;