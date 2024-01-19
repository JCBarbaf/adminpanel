'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('return_errors', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'payment_methods',
          key: 'id'
        }
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      errorCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      errorMessage: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('return_errors')
  }
}
