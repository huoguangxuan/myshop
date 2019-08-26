const Service = require('egg').Service;
const md5 = require('md5')
const moment = require('moment')
class AdminService extends Service {
    
  async find(query) {
    const {ctx} =this
    
    const rs = await ctx.model.Admin.findAll(
      // {
      //   where:{
      //     username:query.username,
      //     password:md5(query.password)
      //   }
      // }
    )
    const admin =rs[0].dataValues
    return admin;
  }
}

module.exports = AdminService;