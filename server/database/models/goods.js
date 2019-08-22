/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_sn: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    click_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    goods_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    shop_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    market_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    relation_goods: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_attr: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_version: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    goods_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_gift: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_fitting: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    goods_sort: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    is_delete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_hot: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_best: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_new: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    goods_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    tableName: 'goods'
  });
};
