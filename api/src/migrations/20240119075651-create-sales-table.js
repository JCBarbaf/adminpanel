'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'carts',
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
      couponId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'coupons',
          key: 'id'
        }
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      saleTime: {
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
    await queryInterface.addIndex('sales', ['cartId'], {
      name: 'sales_cartId_fk'
    })
    await queryInterface.addIndex('sales', ['customerId'], {
      name: 'sales_customerId_fk'
    })
    await queryInterface.addIndex('sales', ['paymentMethodId'], {
      name: 'sales_paymentMethodId_fk'
    })
    await queryInterface.addIndex('sales', ['couponId'], {
      name: 'sales_couponId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales')
  }
}
