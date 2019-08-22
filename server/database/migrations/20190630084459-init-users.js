'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('users', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    username:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nickname:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },  
    avatar:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password:{
      type:Sequelize.CHAR(8),
      allowNull: false
    },
    mobile:{
      type:Sequelize.INTEGER(11),
      allowNull: false
    },
    email:{
      type: Sequelize.STRING(30),
      allowNull:false
    },
    user_type:{
      type: Sequelize.CHAR(1),
      allowNull:false
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    role_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    add_time:{
      type: Sequelize.DATE,
    },
    is_super:{
      type:Sequelize.BOOLEAN,
      defaultValue:false
    }
    },{
      tableName:'users',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    }).then(()=>{
      return queryInterface.addIndex('users',{
        name:'role_id',
        unique:true,
        fields:['role_id']
      })
    }).then(()=>{
      return queryInterface.addIndex('users',{
        name:'email',
        unique:true,
        fields:['email']
      })
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('users');
  }
};
