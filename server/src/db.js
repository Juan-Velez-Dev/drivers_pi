require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//* crea una instancia de Sequelize para conectarse a la base de datos

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, // evita que se muestren registros SQL en la consola
  native: false // no utiliza la biblioteca nativa de postgresSQL para mejorar la compatibilidad
});

module.exports = {
  ...sequelize.models,
  sequelize: sequelize
}