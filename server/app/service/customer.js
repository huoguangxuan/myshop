const Service = require('egg').Service;
const md5 = require('md5')
const moment = require('moment')
class CustomerService extends Service {
  async find(uid) {
    const {ctx} =this
    const rs= await ctx.model.Customer.findAll()
    console.log(rs)
    return rs
  }
}

module.exports = CustomerService;