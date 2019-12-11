/* jshint indent: 2 */

module.exports = function(app) {
  const { STRING, INTEGER,DATE ,CHAR} = app.Sequelize;
    return app.model.define('users', {
      id: {
        type: INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      username: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      nickname: {
        type: STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      avatar: {
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
        allowNull: false
      },
      email: {
        type: STRING(30),
        allowNull: false,
        unique: true
      },
      user_type: {
        type: CHAR(1),
        allowNull: false
      },
      status: {
        type: CHAR(1),
        allowNull: false
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
      }
    }, {
      tableName: 'users'
    });
  };
  