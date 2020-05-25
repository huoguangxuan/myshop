const Service = require('egg').Service;
const md5 = require('md5')
const moment = require('moment')
class AdminService extends Service {
    
  async find(query) {
    const {ctx} =this
    console.log('md5:',md5('hanhan'),query)
    // const rs = await ctx.model.Admin.findOne({username:query.username,password:md5(query.password)})
    // console.log('查到的数据：',rs)
    // const admin =rs[0].dataValues
    // return admin;
    return [];
  }
}

module.exports = AdminService;