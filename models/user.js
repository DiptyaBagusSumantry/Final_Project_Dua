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
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          arge: true,
          msg: "Full Name Tidak Boleh Kosong"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Email Tidak Boleh Kosong"
        },
        isEmail: {
          args:true,
          msg:"Email Format Salah"
        },
      },      
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Username Tidak Boleh Kosong"
        },
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Password Tidak Boleh Kosong"
        },
      }
    },
    profil_image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Profil Url Tidak Boleh Kosong"
        },
        isUrl: {
          args: true,
          msg: "Link tidak Valid!"
        },
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Usia Tidak Boleh Kosong"
        },
        isInt: {
          args: true,
          msg: "Anda Harus Memasukan Angka"
        },
      }
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args:true,
          msg:"Data Tidak Boleh Kosong(Null)!"
        },
        notEmpty: {
          args:true,
          msg:"Nomor Telepon Tidak Boleh Kosong"
        },
        isInt: {
          args: true,
          msg: "Anda Harus Memasukan Angka"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user,opt) => {
        const hashedPassword = hashPassword(user.password)
        user.password = hashedPassword
      },
      beforeUpdate: (user,opt) => {
        const hashedPassword = hashPassword(user.password)
        user.password = hashedPassword
      }
    }
  });
  return User;
};