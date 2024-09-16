import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Deck = sequelize.define(
  "Deck",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default Deck;