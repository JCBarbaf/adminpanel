'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('page_trackings', {
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
      ip: {
        type: Sequelize.STRING,
      },
      isRobot: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      startTime: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      endTime: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      latencyMs: {
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
    await queryInterface.addIndex('page_trackings', ['customerId'], {
      name: 'page_trackings_customerId_fk'
    })
    await queryInterface.addIndex('page_trackings', ['localeSeoId'], {
      name: 'page_trackings_localeSeoId_fk'
    })
    await queryInterface.addIndex('page_trackings', ['localeSeoSlugId'], {
      name: 'page_trackings_localeSeoSlugId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('page_trackings')
  }
}
