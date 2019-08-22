'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('region', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    pid:{
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    region_name:{
      type: Sequelize.STRING,
      allowNull:false,
    },
    region_type:{
      type: Sequelize.STRING,
      allowNull:false,
    },
    agency_id:{
      type: Sequelize.INTEGER,
      allowNull:false,
    },

    },{
      tableName:'region',
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
   return queryInterface.dropTable('region');
  }
};
