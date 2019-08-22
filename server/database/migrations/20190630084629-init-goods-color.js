'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods_color', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    color_name:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    color_name:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    }
    },{
      tableName:'goods_color',
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
   return queryInterface.dropTable('goods_color');
  }
};
