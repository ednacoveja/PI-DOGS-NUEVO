const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height/*altura*/:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    weight/*peso*/:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    life_span:{
      type: DataTypes.STRING,
    },
    image:{
      type: DataTypes.STRING,
    },
    create_db:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  });
};
