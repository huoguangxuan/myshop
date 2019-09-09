'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const requrl = app.middleware.reqUrl();//路由级别的中间件 router.get('/', requrl,controller.home.index);
  router.get('/', requrl,controller.home.index);
  router.post('/admin/login', controller.admin.login);
  router.post('/admin/logout', controller.admin.logout);
  router.get('/admin/info', controller.admin.getInfo);
  router.get('/user/list', controller.user.userList);
  router.get('/goods/list', controller.goods.index);
  router.get('/goods/cate', controller.goods.cate);
  router.post('/goods/cate/add', controller.goods.addCate);
  // router.get('/user/list', controller.user.getUsers);
  // router.get('/login', controller.login.index);
};
