const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      plataformas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      LaunchDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamp: false,
    }
  );
};
