'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // var rs = await ctx.model.Role.findAll();
    let rs = await ctx.model.Admin.findAll()
    ctx.body = rs[0].dataValues;
  }
  async list() {
    const { ctx } = this;
    // var rs = await ctx.model.Role.findAll();
    let rs = await ctx.service.user.find(1)
    ctx.body = rs;
  }
}

module.exports = HomeController;
