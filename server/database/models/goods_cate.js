/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_cate', {
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
    cate_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    filter_attr: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    tempalte: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    sub_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    describtion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
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
    tableName: 'goods_cate'
  });
};
