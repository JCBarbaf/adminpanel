'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slug_redirects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      localeSeoSlugId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      oldUrl: {
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
    await queryInterface.addIndex('locale_seo_slug_redirects', ['localeSeoSlugId'], {
      name: 'locale_seo_slugs_redirects_localeSeoSlugId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locale_seo_slug_redirects')
  }
}
