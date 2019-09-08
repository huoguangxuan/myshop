'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods_cate', { 
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
    cate_img:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    filter_attr:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    link:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    pid:{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    template:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    sub_title:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    keywords:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    describtion:{
      type:Sequelize.STRING,

      defaultValue: ''
    },
    sort:{
      type: Sequelize.CHAR(1),
    },
    add_time:{
      type: Sequelize.DATE,
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    }
    
    },{
      tableName:'goods_cate',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    }).then(()=>{
      return queryInterface.addIndex('goods_cate',{
        name:'pid',
        unique:false,
        fields:['pid']
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
   return queryInterface.dropTable('goods_cate');
  }
};
