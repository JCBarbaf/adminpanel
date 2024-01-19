'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('price_discounts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prices',
          key: 'id'
        }
      },
      percentage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      multiplier: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      current: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      startsAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endsAt: {
        type: Sequelize.DATE,
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
    await queryInterface.addIndex('price_discounts', ['priceId'], {
      name: 'price_discounts_priceId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('price_discounts')
  }
}
