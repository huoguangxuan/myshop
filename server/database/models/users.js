/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    mobile: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    user_type: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      unique: true
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_super: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'users'
  });
};
