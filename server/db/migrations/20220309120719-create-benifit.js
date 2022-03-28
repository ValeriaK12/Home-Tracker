'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Benifits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Category_benifits',
          key: 'id',
        },
      },
      link: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Benifits');
  }
};
