/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  //配置数据库

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: "huo1233210",
    database: "myshop_default",
    port: 3306,
    define: {
      timestamps: false,
  }
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_18618110533_1212';
    // redis
  config.redis = {
    clients: {
      default: {
        host: 'localhost',
        port: '6379',
        password: '',
        db: '0',
      },
      subscribe: {
        host: 'localhost',
        port: '6379',
        password: '',
        db: '1',
      },
      session: {
        host: 'localhost',
        port: '6379',
        password: '',
        db: '2',
      },
    },
    agent: true,
  };

  exports.sessionRedis = {
    name: 'session', // specific instance `session` as the session store
  };
  // add your middleware config here
  config.middleware = ['auth','errorHandler'];
  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:9528' ],
  };


  // jwt
  exports.jwt = {
    secret: '123456',
    // ignore: '/weapp',
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.proxy = true;
  return {
    ...config,
    ...userConfig,
  };
};
