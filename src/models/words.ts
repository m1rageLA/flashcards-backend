import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Words = sequelize.define("Words", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  frontSide: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  backSide: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


export default Words;