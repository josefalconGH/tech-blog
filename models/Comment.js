// Purpose: comment model for the database
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "post",
        key: "id",
      },
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Comment;
