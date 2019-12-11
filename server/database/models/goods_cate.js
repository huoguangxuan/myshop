/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_cate', {
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
    cate_img: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    filter_attr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    template: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    describtion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    sort: {
      type: DataTypes.CHAR(1),
      allowNull: true
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
    tableName: 'goods_cate'
  });
};
