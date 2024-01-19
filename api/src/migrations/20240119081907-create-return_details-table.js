'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('return_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      returnId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'returns',
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
    await queryInterface.addIndex('return_details', ['returnId'], {
      name: 'return_details_returnId_fk'
    })
    await queryInterface.addIndex('return_details', ['productId'], {
      name: 'return_details_productId_fk'
    })
    await queryInterface.addIndex('return_details', ['localeId'], {
      name: 'return_details_localeId_fk'
    })
    await queryInterface.addIndex('return_details', ['priceId'], {
      name: 'return_details_priceId_fk'
    })
    await queryInterface.addIndex('return_details', ['taxId'], {
      name: 'return_details_taxId_fk'
    })
    await queryInterface.addIndex('return_details', ['priceDiscountId'], {
      name: 'return_details_priceDiscountId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('return_details')
  }
}
