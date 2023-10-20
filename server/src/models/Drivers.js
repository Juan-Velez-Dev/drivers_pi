const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  //! terminar de hacer validaciones


  sequelize.define('drivers', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  })
};
