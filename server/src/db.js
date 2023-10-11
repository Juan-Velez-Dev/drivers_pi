require('dotenv').config();


const { Sequelize } = require('sequelize');

const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//* crea una instancia de Sequelize para conectarse a la base de datos

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, // evita que se muestren registros SQL en la consola
  native: false // no utiliza la biblioteca nativa de postgresSQL para mejorar la compatibilidad
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Drivers(sequelize);
// Teams(sequelize)
const { Drivers, Teams } = sequelize.models;


Drivers.belongsToMany(Teams, { through: 'drivers_teams' });
Teams.belongsToMany(Drivers, { through: 'drivers_teams' });

module.exports = {
  ...sequelize.models,
  sequelize: sequelize
}