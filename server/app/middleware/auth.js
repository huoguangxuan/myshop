
module.exports = (options, app) => {
    return async function auth(ctx, next) {
      if (ctx.path.indexOf('/weapp/') === 0) {
        // 微信小程序接口
        const sessionid = ctx.get('sessionid');
        const session = ctx.helper.JSONParse(await app.redis.get('default').get(sessionid)) || {};
        const { openId } = session;
        ctx.request.body.openId = openId;
        ctx.request.body = { ...ctx.request.body, ...ctx.query };
  
        // 过滤登录接口
        if (openId || ctx.path === '/weapp/login') {
          await next();
        } else {
          ctx.body = {
            code: ctx.NO_LOGIN_CODE,
            message: '尚未登录',
          };
        }
      } else {
        // 管理端接口
        // 过滤登录接口和验证token
        const ignorePaths = ['/admin/login', '/admin/logout'];
        // console.log(ctx.request)
        const valid = await ctx.verifyToken();
        if (valid || ignorePaths.includes(ctx.path)) {
          await next();
        }
      }
    };
  };

  //会作用在所有的请求之前 应用级别中间件