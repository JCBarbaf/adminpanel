'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_details', {
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
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      localeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locales',
          key: 'id'
        }
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prices',
          key: 'id'
        }
      },
      priceDiscountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'price_discounts',
          key: 'id'
        }
      },
      taxId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'taxes',
          key: 'id'
        }
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      basePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      taxPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      quantity: {
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
    await queryInterface.addIndex('cart_details', ['cartId'], {
      name: 'cart_details_cartId_fk'
    })
    await queryInterface.addIndex('cart_details', ['productId'], {
      name: 'cart_details_productId_fk'
    })
    await queryInterface.addIndex('cart_details', ['localeId'], {
      name: 'cart_details_localeId_fk'
    })
    await queryInterface.addIndex('cart_details', ['priceId'], {
      name: 'cart_details_priceId_fk'
    })
    await queryInterface.addIndex('cart_details', ['priceDiscountId'], {
      name: 'cart_details_priceDiscountId_fk'
    })
    await queryInterface.addIndex('cart_details', ['taxId'], {
      name: 'cart_details_taxId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_details')
  }
}
