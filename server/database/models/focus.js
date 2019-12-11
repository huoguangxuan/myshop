/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('focus', {
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
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    foucs_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    sort: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'focus'
  });
};
