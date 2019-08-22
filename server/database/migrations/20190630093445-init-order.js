'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('order', { 
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    bill_number:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bill_date:{
      type:Sequelize.DATE,
    },
    uid:{
      type: Sequelize.INTEGER,
    },
    paycode:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    bill_amount:{ type: Sequelize.INTEGER,},
    pref_amount:{ type: Sequelize.INTEGER,},
    pay_amount:{ type: Sequelize.INTEGER,},
    payed_amount:{ type: Sequelize.INTEGER,},
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
    },
    modify_time:{
      type: Sequelize.DATE,
    }
    },{
      tableName:'order',
      charset:'utf8mb4',
      collate:'utf8mb4_bin',
      indexes:[
  
      ]
    })
   
    ;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('order');
  }
};
