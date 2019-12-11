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
   return queryInterface.bulkInsert('admin', [{
    username: 'huohuo',
    password:md5('123456'),
    mobile:11,
    email:'117622536@qq.com',
    status:'0',
    role_id:'0',
    add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
    is_super: true,
    avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  }], {}).then(data=>{
    return queryInterface.bulkInsert('role',[
      {
      title:'系统管理员',
      describtion:'拥有系统的所有权限',
      status:'0',
      add_time:moment().format('YYYY-MM-DD HH:mm:ss')
    }],{})
  }).then(data=>{
    return queryInterface.bulkInsert('users',[
      {
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
        username:"dddsmida",
        nickname:"dddsmida",
        avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        password:md5('123456'),
        mobile:'123456',
        email:'ddsmida@163.com',
        role_id:1,
        add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
        is_super: false
      }],{})
  }).catch(e=>{
    console.log(e)
  });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('admin', null, {});
  }
};
