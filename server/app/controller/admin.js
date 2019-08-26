'use strict';

const Controller = require('../core/base_controller')
const MD5 = require('md5')
class AdminController extends Controller {
  async login() {
    const { ctx,app } = this;
    let query=ctx.request.body
    let admin = await ctx.service.admin.find(query)
    if (app._.isEmpty(admin)) {
      return this.fail(ctx.ERROR_CODE, '账号或密码错误');
    }
    const {id:uid,username} =admin;
    const rs= {uid,username}
    ctx.session.username=ctx.request.body.username
    ctx.session.userid=uid
    ctx.setToken(rs)
    this.success({...rs,token:"huohuo"})
  }
  async getInfo(){
    const {ctx} = this
    console.log(ctx.request.query.token,ctx.session.username)
    this.success()
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