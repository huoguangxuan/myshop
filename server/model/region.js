/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('region', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    region_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    region_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agency_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'region'
  });
};
