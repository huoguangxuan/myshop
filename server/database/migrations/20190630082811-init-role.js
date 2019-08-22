'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('role', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    describtion:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    add_time:{
      type: Sequelize.DATE,
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    }
    },{
      tableName:'role',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('role');
  }
};
