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
      this.belongsTo(models.Photo);
    }
  }
  Comment.init({
    UserId: DataTypes.INTEGER,
    PhotoId: DataTypes.INTEGER,
    Comments: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Comment Tidak Boleh Kosong"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};