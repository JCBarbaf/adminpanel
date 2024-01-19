'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_errors', {
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
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'carts',
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
    await queryInterface.addIndex('sale_errors', ['paymentMethodId'], {
      name: 'sale_errors_paymentMethodId_fk'
    })
    await queryInterface.addIndex('sale_errors', ['customerId'], {
      name: 'sale_errors_customerId_fk'
    })
    await queryInterface.addIndex('sale_errors', ['cartId'], {
      name: 'sale_errors_cartId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_errors')
  }
}
