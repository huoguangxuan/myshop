'use strict';

const Controller = require('egg').Controller;
const MD5 = require('md5')
class AdminController extends Controller {
  async login() {
    const { ctx } = this;
    let query=ctx.request.body
    let res = await ctx.model.Admin.findAll({
      where:{
        username:query.username
      }
    })
    const name = res[0].dataValues.username
    const password = res[0].dataValues.password

    if(name && password==MD5(query.password)){
      const token = 'admin_token'
      ctx.body = {
        code:20000,
        data:{
          massage:'登录成功',
          token
        }
        
      };
    }else{
      ctx.body ={
        code:1,
        massage:'登录失败'
      };
    }
  }
  async getInfo(){
    const {ctx} = this
    if(ctx.request.query.token="admin_token"){
      var rs = await ctx.service.admin.find(1)
      var admin = rs[0].dataValues
      console.log(admin)
      ctx.body={
        code:20000,
        data:admin
        
      }
    }
  }
  async logout(){
    this.ctx.body={
      code:20000,
      data:{
        token:'',
        massage:'退出登录'
      }
      
    }
  }
}

module.exports = AdminController;