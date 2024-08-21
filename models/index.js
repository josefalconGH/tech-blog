// Purpose: create the associations between the models
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "author",
});

Blog.belongsTo(User, {
  foreignKey: "author",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "author",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "author",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
