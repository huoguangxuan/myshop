'use strict';

const Controller = require('../core/base_controller')
const MD5 = require('md5')
class AdminController extends Controller {
  async login() {
    const { ctx,app } = this;
    let query=ctx.request.body
    if(query.loginType==='admin'){
      console.log(1)
      let admin = await ctx.service.admin.find(query)
      if (app._.isEmpty(admin)) {
        return this.fail('账号或密码错误',ctx.ERROR_CODE);
      }
      const {id:uid,username} =admin;
      const rs= {uid,username}
      console.log(rs)
      ctx.setToken(rs)
      this.success(rs)
    }else{
      let custom = await ctx.service.customer.find(query)
      if (app._.isEmpty(custom)) {
        return this.fail('账号或密码错误',ctx.ERROR_CODE);
      }
      const {id:uid,username} =custom;
      const rs= {uid,username}
      ctx.setToken(rs)
      this.success(rs)
    }
    
    
  }
  async getInfo(){
    const {ctx} = this
    const rs =await ctx.service.admin.find({
      uid:1,
      username:"huohuo"
    })
    this.success(rs)
  }
  async logout(){
    const {ctx} =this
    ctx.removeToken()
    this.success()
  }
}

module.exports = AdminController;