'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods_cate_attribute', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    cate_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    
    attr_type:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    attr_value:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    
    sub_title:{
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
      tableName:'goods_type_attribute',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    }).then(()=>{
      return queryInterface.addIndex('goods_cate_attribute',{
        name:'cate_id',
        unique:true,
        fields:['cate_id']
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
   return queryInterface.dropTable('goods_cate_attribute');
  }
};
