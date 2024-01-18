'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NOMBRE', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      fingerprint: {
        type: Sequelize.STRING,
        allowNull: false
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seo',
          key: 'id'
        }
      },
      localeSeoSlug: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      fingerprint: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('NOMBRE')
  }
}
