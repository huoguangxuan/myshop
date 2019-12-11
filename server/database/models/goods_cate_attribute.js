/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_cate_attribute', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    cate_id: {
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
    attr_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    attr_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    sub_title: {
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
    tableName: 'goods_cate_attribute'
  });
};
