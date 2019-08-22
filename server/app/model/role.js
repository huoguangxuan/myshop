/* jshint indent: 2 */



'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE,CHAR } = app.Sequelize;

  const Role = app.model.define('role', {
    id: {
      type: INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    describtion: {
      type: STRING(255),
      allowNull: false,
      defaultValue: ''
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
    tableName: 'role'
  });

  return Role;
};

