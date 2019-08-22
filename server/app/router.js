'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const requrl = app.middleware.reqUrl();
  router.get('/', requrl,controller.home.index);
  router.post('/admin/login', controller.admin.login);
  router.post('/admin/logout', controller.admin.logout);
  router.get('/admin/info', controller.admin.getInfo);
  router.get('/user/list', controller.user.userList);
  // router.get('/user/list', controller.user.getUsers);
  // router.get('/login', controller.login.index);
};
