'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_category_relations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      productCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'product_categories',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
     	createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_category_relations')
  }
}
