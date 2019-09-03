/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('access', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    module_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
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
      defaultValue: '0',
      unique: true
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
    }
  }, {
    tableName: 'access'
  });
};
