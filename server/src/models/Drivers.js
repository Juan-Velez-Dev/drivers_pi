const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('drivers', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      unique: true,
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
