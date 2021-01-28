"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.hasMany(models.comment);
      post.belongsTo(models.user);
    }
  }
  post.init(
    {
      userId: { type: DataTypes.INTEGER, references: { model: "users", key: "id" } },
      title: { type: DataTypes.STRING, allowNull: false },
      location: DataTypes.STRING,
      votes: DataTypes.INTEGER,
      message: DataTypes.STRING(500),
      picture: DataTypes.STRING,
      tags: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
