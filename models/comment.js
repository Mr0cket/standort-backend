"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.post);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      postId: { type: DataTypes.INTEGER, references: { model: "posts", key: "id" } },
      userId: { type: DataTypes.INTEGER, references: { model: "users", key: "id" } },
      text: DataTypes.STRING(1000),
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
