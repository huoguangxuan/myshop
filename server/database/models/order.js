/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    bill_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    bill_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    paycode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    bill_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pref_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    payed_amount: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    action_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    module_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    sort: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    describtion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'order'
  });
};
