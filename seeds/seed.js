// Purpose: Seed the database with test data
const sequelize = require("../config/connection");
const { User, Blog } = require("../models");

const userSeedData = require("./userSeed.json");
const blogSeedData = require("./blogSeed.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("----------- SEEDING CONNECTED TO DATABASE -----------");

  await User.bulkCreate(userSeedData, { individualHooks: true });
  console.log("----------- DONE SEEDING USERS -----------");
  await Blog.bulkCreate(blogSeedData);
  console.log(
    "----------- DONE SEEDING POSTS -----------",
    "\n----------- SEEDING COMPLETED -----------"
  );
  process.exit(0);
};

seedDatabase();
