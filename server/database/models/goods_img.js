/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods_img', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    color_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'goods_img'
  });
};
