'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slugs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      parentSlug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      relParent: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      key: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
      },
      redirection: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
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
    await queryInterface.addIndex('locale_seo_slugs', ['localeSeoId'], {
      name: 'locale_seo_slugs_localeSeoId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locale_seo_slugs')
  }
}
