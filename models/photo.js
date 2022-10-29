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
      this.hasMany(models.Comment);
    }
  }
  Photo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Photo Tidak Boleh Kosong"
        },
      }
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Caption Tidak Boleh Kosong"
        },
      }
    },
    poster_image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: "Harus Memasukan Link"
        },
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Poster Url Tidak Boleh Kosong"
        },
      }
    },

    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};