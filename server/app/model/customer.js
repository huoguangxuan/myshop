/* jshint indent: 2 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER,DATE ,CHAR} = app.Sequelize;

  const Customer = app.model.define('customer', {
    id: {
      type: INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: CHAR(8),
      allowNull: false
    },
    mobile: {
      type: INTEGER(11),
    },
    email: {
      type: STRING(30),
    },
    status: {
      type: INTEGER(1),
    },
    role_id: {
      type: INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    add_time: {
      type: DATE,
      allowNull: true
    },
    is_super: {
      type: INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    avatar: {
      type: STRING(255),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'Users'
  });

  return Customer;
};
