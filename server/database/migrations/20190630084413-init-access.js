'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('access', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    module_name:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    action_name:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    type:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    module_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    sort:{
      type: Sequelize.CHAR(1),
      allowNull:false
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    describtion:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    add_time:{
      type: Sequelize.DATE,
    }
    },{
      tableName:'access',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    }).then(()=>{
      return queryInterface.addIndex('access',{
        name:'module_id',
        unique:true,
        fields:['module_id']
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
   return queryInterface.dropTable('access');
  }
};
