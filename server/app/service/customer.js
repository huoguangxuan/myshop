const Service = require('egg').Service;
const md5 = require('md5')
class CustomerService extends Service {
  async find(query) {
    const {ctx} =this
    const rs= await ctx.model.Customer.findOne({where:{username:query.username,password:md5(query.password)}})
    console.log("查的结果：",rs)
    return rs
  }
}

module.exports = CustomerService;