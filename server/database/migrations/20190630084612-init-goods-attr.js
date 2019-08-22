'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods_attr', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    goods_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    attribute_cate_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    attribute_id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    
    attribute_type:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    attribute_title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    attribute_value:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cid:{
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
      tableName:'goods_attr',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    }).then(()=>{
      return queryInterface.addIndex('goods_attr',{
        name:'cid',
        unique:true,
        fields:['cid']
      })
    })
    .then(()=>{
      return queryInterface.addIndex('goods_attr',{
        name:'goods_id',
        unique:true,
        fields:['goods_id']
      })
    })
    .then(()=>{
      return queryInterface.addIndex('goods_attr',{
        name:'attribute_cate_id',
        unique:true,
        fields:['attribute_cate_id']
      })
    })
    .then(()=>{
      return queryInterface.addIndex('goods_attr',{
        name:'attribute_id',
        unique:true,
        fields:['attribute_id']
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
   return queryInterface.dropTable('goods_attr');
  }
};
