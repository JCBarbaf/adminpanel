'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        }
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'id'
        }
      },
      dialCodeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'dial_codes',
          key: 'id'
        }
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fiscalAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comercialAdress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telephone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      web: {
        type: Sequelize.STRING,
      },
      fiscalName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comercialName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vat: {
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
    await queryInterface.addIndex('companies', ['countryId'], {
      name: 'companies_countryId_fk'
    })
    await queryInterface.addIndex('companies', ['cityId'], {
      name: 'companies_cityId_fk'
    })
    await queryInterface.addIndex('companies', ['dialCodeId'], {
      name: 'companies_dialCodeId_fk'
    })
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies')
  }
}
