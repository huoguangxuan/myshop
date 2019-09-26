/* jshint indent: 2 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER,DATE ,CHAR,UUIDV1} = app.Sequelize;

  const GoodsCate = app.model.define('goods_cate', {
    id: {
        type: STRING(38),
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV1,
      },
      title: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      cate_img: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      filter_attr: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      link: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      pid: {
        type: INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      template: {
        type: STRING(255),
        allowNull: true
      },
      sub_title: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      keywords: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      describtion: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      sort: {
        type: CHAR(1),
        allowNull: false
      },
      add_time: {
        type: DATE,
        allowNull: true
      },
      status: {
        type: CHAR(1),
        allowNull: false
      }
  }, {
    tableName: 'goods_cate'
  });

  return GoodsCate;
};