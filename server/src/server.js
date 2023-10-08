const express = require('express');
const driversRoutes = require('./routes/drivers.routes');
const teamsRoutes = require('./routes/teams.routes');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.use(driversRoutes);
server.use(teamsRoutes);


module.exports = server;