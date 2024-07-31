require("dotenv").config();

const Sequelize = require("sequelize");

let sequelize;

// if DB_URL environment variable exists, else it utilizes the environment variables from the .env file
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

module.exports = sequelize;
