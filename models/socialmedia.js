'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
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
  SocialMedia.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Nama Tidak Boleh Kosong"
        },
      }
    },
    social_media_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isUrl: {
        args: true,
        msg: " Harus Memasukan Link"
      },
      notNull: {
        args:true,
        msg:"Data Tidak Boleh Kosong(Null)!"
      },
      notEmpty: {
        args:true,
        msg:"Social Media Url Tidak Boleh Kosong"
      },
    }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SocialMedia',
  });
  return SocialMedia;
};