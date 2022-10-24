'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
    }
  }
  Comment.init({
    UserId: DataTypes.INTEGER,
    PhotoId: DataTypes.INTEGER,
    Comment: {
      type: DataTypes.TEXT,
      notEmpty: {
        args: true,
        msg: "Harus di Isi"
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};