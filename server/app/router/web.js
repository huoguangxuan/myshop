
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports= app => {
    const { router, controller } = app;
    // const requrl = app.middleware.reqUrl();//路由级别的中间件 router.get('/', requrl,controller.home.index);
    router.post('/admin/login', controller.admin.login);
    router.get('/admin/info', controller.admin.getInfo);
    router.post('/admin/logout', controller.admin.logout);
}