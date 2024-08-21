# tech-blog

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application uses the MVC paradigm in its architectural structure, Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

### License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Demo

## Features

- When the user visits the site for the first time, the homepage will display all blog posts.
- The user can navigate to the dashboard by clicking on the dashboard option in the navigation.
- The user can create a new blog post by clicking on the new post option in the dashboard.
- The user can update a blog post by clicking on the edit option in the dashboard.
- The user can delete a blog post by clicking on the delete option in the dashboard.
- The user can comment on a blog post by clicking on the comment option in the dashboard.
- The user can log in to the site by clicking on the login option in the navigation.

## Mock-Up

## Learning Outcomes

- Create a CMS-style blog site similar to a Wordpress site.
- Use the MVC paradigm in the architectural structure of the application.
- Use Handlebars.js as the templating language.
- Use Sequelize as the ORM.
- Use the express-session npm package for authentication.

## Usage

1. Clone the repository:

   ```bash
   git clone
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```bash
   touch .env
   ```

4. Add the following to the `.env` file:

   ```bash
   DB_NAME='tech
   DB_USER='root'
   DB_PW='your_password'
   ```

5. Create the database:

   ```bash
   mysql -u root -p
   ```

   ```bash
   source db/schema.sql
   ```

6. Seed the database:

   ```bash
   npm run seed
   ```

7. Start the server:

   ```bash
   npm start
   ```

8. Navigate to `http://localhost:3001/` in your browser.
