'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('returns', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
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
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'payment_methods',
          key: 'id'
        }
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      totalBasePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      totalTaxPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      returnDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      returnTime: {
        type: Sequelize.TIME,
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
    await queryInterface.addIndex('returns', ['saleId'], {
      name: 'returns_saleId_fk'
    })
    await queryInterface.addIndex('returns', ['customerId'], {
      name: 'returns_customerId_fk'
    })
    await queryInterface.addIndex('returns', ['paymentMethodId'], {
      name: 'returns_paymentMethodId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('returns')
  }
}
