const Service = require('egg').Service;
const md5 = require('md5')
const moment = require('moment')
class UsersService extends Service {
    
  async find(query) {
    const {ctx} =this
    
    const rs = await ctx.model.Users.findAll()
    const users =rs
    return users;
  }
}

module.exports = UsersService;