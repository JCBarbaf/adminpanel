module.exports = function (sequelize, DataTypes) {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    customerId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    couponId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    totalBasePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    totalTaxPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    saleTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'sales',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  Sale.associate = function (models) {

  }

  return Sale
}