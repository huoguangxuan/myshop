/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_attr', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    attribute_cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    attribute_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    attribute_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    attribute_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    attribute_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    cid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    sort: {
      type: DataTypes.CHAR(1),
      allowNull: false
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
    tableName: 'goods_attr'
  });
};
