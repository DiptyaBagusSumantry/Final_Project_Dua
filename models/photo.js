'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
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
  Photo.init({
    title: {
      type: DataTypes.STRING,
      validate: {
      notEmpty: {
        args: true,
        msg: "Tidak Boleh Kosong"
      },
    }
    },
    caption: {
      type: DataTypes.TEXT,
      validate: {
      notEmpty: {
        args:  true,
        msg: "Harus di Isi"
      },
    }
    },
    poster_image_url: {
      type: DataTypes.TEXT,
      validate: {
      isUrl: {
        args: true,
        msg: "Harus Memasukan Link"
      },
      notEmpty: {
        args: true,
        msg: "Harus di isi"
      }
    }
    },

    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};