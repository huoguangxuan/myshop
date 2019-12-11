/* jshint indent: 2 */

'use strict';
const moment = require('moment') ;
module.exports = app => {
  const { STRING, DATE ,CHAR,INTEGER} = app.Sequelize;

  const GoodsCate = app.model.define('goods_cate', {
    id: {
        type: INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
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
        type: STRING(255),
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
        allowNull: true,
        defaultValue:moment().format('YYYY-MM-DD HH:mm:ss')
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