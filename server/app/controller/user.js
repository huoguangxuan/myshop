
'use strict';

const Controller = require('egg').Controller;
const MD5 = require('md5')
class UserController extends Controller {
  async userList() {
      const {ctx} =this
        const userList = await ctx.service.user.find()
      this.ctx.body={
          userList,
      }
  }
}

module.exports = UserController;