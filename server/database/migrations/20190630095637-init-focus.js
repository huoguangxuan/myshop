'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('focus', { 
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
    type:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    foucs_img:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url:{
      type:Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    },
    sort:{
      type: Sequelize.CHAR(1),
      allowNull:false
    },
    status:{
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    add_time:{
      type: Sequelize.DATE,
    }
    },{
      tableName:'focus',
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
   return queryInterface.dropTable('focus');
  }
};
