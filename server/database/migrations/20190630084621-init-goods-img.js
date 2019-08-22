'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods_img', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    product_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    
    img_url:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    color_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    sort:{
      type: Sequelize.CHAR(1),
      allowNull:false
    },
    add_time:{
      type: Sequelize.DATE,
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    }
    
    },{
      tableName:'goods_img',
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
   return queryInterface.dropTable('goods_img');
  }
};
