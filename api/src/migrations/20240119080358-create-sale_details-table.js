'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_details', {
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
    await queryInterface.addIndex('sale_details', ['saleId'], {
      name: 'sale_details_saleId_fk'
    })
    await queryInterface.addIndex('sale_details', ['productId'], {
      name: 'sale_details_productId_fk'
    })
    await queryInterface.addIndex('sale_details', ['localeId'], {
      name: 'sale_details_localeId_fk'
    })
    await queryInterface.addIndex('sale_details', ['priceId'], {
      name: 'sale_details_priceId_fk'
    })
    await queryInterface.addIndex('sale_details', ['priceDiscountId'], {
      name: 'sale_details_priceDiscountId_fk'
    })
    await queryInterface.addIndex('sale_details', ['taxId'], {
      name: 'sale_details_taxId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_details')
  }
}
