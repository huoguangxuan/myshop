'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.router.resources('users','/api/v1/users', app.controller.v1.users);
  app.router.resources('goods','/api/v1/goods', app.controller.v1.goods);
  app.router.get('/api/v1/cate', app.controller.v1.cate);
};
