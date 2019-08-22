'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('goods', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false,
      comment:'123'
    },
    title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    sub_title:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    goods_sn:{
      type:Sequelize.CHAR(10),
      allowNull: false,
    },
    cate_id:{
      type: Sequelize.INTEGER,
      field: 'cate_id',
      allowNull: false,
    },
    click_count:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    goods_number:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    shop_price:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    market_price:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    relation_goods:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:""
    },
    goods_attr:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:""
    },
    goods_version:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    goods_img:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_gift:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_fitting:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_keywords:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_keywords:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_desc:{
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue:''
    },
    goods_sort:{
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    is_delete:{
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    is_hot:{
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    is_best:{
      type: Sequelize.BOOLEAN,
      defaultValue:false
    },
    is_new:{
      type: Sequelize.BOOLEAN,
      defaultValue:false

    },
    add_time:{
      type: Sequelize.DATE,
    },
    goods_type_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      fields:"goods_type_id"
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    }
  },{
    tableName:'goods',
    charset:'utf8mb4',
    collate:'utf8mb4_bin',
    indexes:[

    ]
  }).then(()=>{
    return queryInterface.addIndex('goods',{
      name:'goods_type_id',
      unique:false,
      fields:['goods_type_id']
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
   return queryInterface.dropTable('goods');
  }
};
