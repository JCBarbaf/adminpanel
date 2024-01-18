'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coupons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
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
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coupons')
  }
}
