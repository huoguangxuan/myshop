/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
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
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    tableName: 'role'
  });
};
