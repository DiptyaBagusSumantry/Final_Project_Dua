'use strict';
const {Model} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo); 
      this.hasMany(models.Comment);
      this.hasMany(models.SocialMedia);
      //models.Photo/Comments/Social meida berasal dari class models yang berisi class Photo extends Model dibagian atas sekitar baris ke-6/ namma table
    } 
  }
  User.init({
    full_name: {
      type: DataTypes.STRING,
      notEmpty: {
        arge: true,
        msg: "Full Name Tidak Boleh Kosong"
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args:true,
          msg:"Email Format Salah"
        },
        notEmpty: {
          args:true,
          msg:"Email Harus di Isi"
        },
      },      
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      notEmpty: {
        args:true,
        msg:"Email Harus di Isi"
      },
    },
    password: {
      type : DataTypes.STRING,
      notEmpty: {
        args: true,
        msg: "Password Tidak Boleh Kosong"
      },
    },
    profil_image_url: {
      type: DataTypes.TEXT,
      notEmpty: {
        args: true,
        msg: "Harus Di Isi"
      },
      isUrl: {
        args: true,
        msg: "Anda Harus Measukan Link"
      }
    },
    age: {
      type: DataTypes.INTEGER,
      notEmpty: {
        args: true,
        msg: "Umur Harus Di Isi"
      },
      isDecimal: {
        args: true,
        msg: "Anda Harus Memasukan Angka"
      },
    },
    phone_number: {
      type: DataTypes.INTEGER,
      notEmpty: {
        args: true,
        msg: "Nomer Hp Harus Di isi"
      },
     isDecimal: {
      args: true,
      msg: "Harus Berisi Angka"
     } 
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user,opt) => {
        const hashedPassword = hashPassword(user.password)
        user.password = hashedPassword
      }
    }
  });
  return User;
};