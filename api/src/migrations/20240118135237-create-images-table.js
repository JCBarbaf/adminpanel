'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      entity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entityId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imageConfigurationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'image_configurations',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      originalFilename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resizedFilename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mediaQuery: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latencyMs: {
        type: Sequelize.INTEGER,
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
    await queryInterface.addIndex('images', ['imageConfigurationID'], {
      name: 'images_imageConfigurationID_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images')
  }
}
