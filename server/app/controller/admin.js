'use strict';

const Controller = require('../core/base_controller')
const MD5 = require('md5')
class AdminController extends Controller {
  async login() {
    const { ctx,app } = this;
    let query=ctx.request.body
    // console.log(query)
    let admin = await ctx.service.admin.find(query)
    if (app._.isEmpty(admin)) {
      return this.fail(ctx.ERROR_CODE, '账号或密码错误');
    }
    const {id:uid,username} =admin;
    const rs= {uid,username}
    ctx.setToken(rs)
    this.success({...rs,token:"huohuo"})
  }
  async getInfo(){
    const {ctx} = this
    const rs =await ctx.service.admin.find({
      uid:1,
      username:"huohuo"
    })
    console.log(rs)
    this.success(rs)
  }
  async logout(){
    this.ctx.body={
      code:0,
      data:{
        token:'',
        massage:'退出登录'
      }
      
    }
  }
}

module.exports = AdminController;