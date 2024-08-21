// Purpose: Main entry point for the application
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const helpers = require("./utils/helpers");
require("dotenv").config();

// initialize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers });

const { strict } = require("assert");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// sets up session configuration
const sessionConfiguration = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 3 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// sets up handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// sets up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionConfiguration));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App now listening on http://localhost:${PORT}`)
  );
});
