'use strict';
const md5 = require('md5')
const moment = require('moment')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', [{
    id:1,
    username:"huoguangxuan",
    nickname:"huohuo",
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    password:md5('123456'),
    mobile:'123456',
    email:'huohuo@163.com',
    role_id:1,
    add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
    is_super: false
  },{
    id:2,
    username:"ggsmida",
    nickname:"ggsmida",
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    password:md5('123456'),
    mobile:'123456',
    email:'ggsmida@163.com',
    role_id:1,
    add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
    is_super: false
  },{
    id:3,
    username:"dddsmida",
    nickname:"dddsmida",
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    password:md5('123456'),
    mobile:'123456',
    email:'ddsmida@163.com',
    role_id:1,
    add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
    is_super: false
  }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
