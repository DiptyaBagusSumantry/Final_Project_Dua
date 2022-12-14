'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      caption: {
        type: Sequelize.TEXT
      },
      poster_image_url: {
        type: Sequelize.TEXT
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE", //cascade = apbaila salah satu terhapus akan terhapus di user dan photo/saling ber relasi
        onDelete: "CASCADE" 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Photos');
  }
};