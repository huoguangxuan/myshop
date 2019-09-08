'use strict';
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
   return queryInterface.bulkInsert('goods_cate', [
     {
      id: 1,
      title: "新鲜水果",
      cate_img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567702228268&di=9d5444ba8b48548e5b00baae2b2ae469&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd9d78350d79485c5c1971be82360da156ac6e1907006-i076eK_fw658",
      filter_attr:null,
      link:null,
      pid:0,
      template:null,
      sub_title:'一级分类',
      keywords:null,
      describtion:'水果大类',
      sort:'1',
      status:0,
      add_time:moment().format('YYYY-MM-DD HH:mm:ss')
    },
    {
      id: 2,
      title: "蔬菜市场",
      cate_img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567702299165&di=819c241efba9ad601c40a57568a74771&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190816%2Feccfca91bc0e4242a2854e1d74b5cabf.gif",
      filter_attr:null,
      link:null,
      pid:0,
      template:'无',
      sub_title:'一级分类',
      keywords:"蔬菜，绿色",
      describtion:'水果大类',
      sort:'2',
      add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
      status:0
    },
    {
      id: 3,
      title: "时令水果",
      cate_img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=989774169,3727055088&fm=26&gp=0.jpg",
      filter_attr:null,
      link:null,
      pid:1,
      template:null,
      sub_title:'一级分类',
      keywords:null,
      describtion:'水果大类',
      sort:'3',
      status:0
    },
], {

  });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('goods_cate', null, {});
  }
};
