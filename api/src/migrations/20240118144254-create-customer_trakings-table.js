'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_trackings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      customerId: {
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
      path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventTime: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      event: {
        type: Sequelize.JSON,
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
    await queryInterface.addIndex('customer_trackings', ['customerId'], {
      name: 'customer_trackings_customerId_fk'
    })
    await queryInterface.addIndex('customer_trackings', ['localeSeoId'], {
      name: 'customer_trackings_localeSeoId_fk'
    })
    await queryInterface.addIndex('customer_trackings', ['localeSeoSlugId'], {
      name: 'customer_trackings_localeSeoSlugId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_trackings')
  }
}
