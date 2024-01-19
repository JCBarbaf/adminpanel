'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menu_items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      menuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'menus',
          key: 'id'
        }
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      localeSeoSlugId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      parent: {
        type: Sequelize.INTEGER,
      },
      customUrl: {
        type: Sequelize.STRING,
      },
      private: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      order: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('menu_items')
  }
}
