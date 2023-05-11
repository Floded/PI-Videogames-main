const { DataTypes } = requiere("sequelize");

module.export = (Sequelize) => {
  Sequelize.define("Genres", {
    ID: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
