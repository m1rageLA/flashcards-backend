import { Sequelize } from "sequelize";

const sequelize = new Sequelize('flashcards_db', 'postgres', '0518', {
    host: "localhost",
    dialect: "postgres",
});

export default sequelize;