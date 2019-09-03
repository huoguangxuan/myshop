'use strict';

const Service = require('egg').Service;

class GoodsCateService extends Service {
  async getCate() {
    const {ctx} =this
    var cates = await ctx.model.GoodsCate.findAll()
    console.log(cates)
    return cates
  }
}

module.exports = GoodsCateService;
