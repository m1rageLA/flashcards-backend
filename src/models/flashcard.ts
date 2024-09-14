import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

const Flashcard = sequelize.define('Flashcard', {
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Flashcard;