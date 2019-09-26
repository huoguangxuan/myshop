'use strict';

const Service = require('egg').Service;

class GoodsCateService extends Service {
  async getCate() {
    const {ctx} =this
    var cates = await ctx.model.GoodsCate.findAll()
    // console.log(cates)
    return cates
  }

  async addCate(item){
    const desStr=item.keyWords.join(',')
    const val={
      title:item.name,
      pid:Number(item.pid),
      status:Number(item.status),
      describtion:item.desc,
      keywords:desStr,
      sort:item.sort
    }
    
    const rs = await this.ctx.model.GoodsCate.create(val)
    console.log(rs)
    return rs
  }
}

module.exports = GoodsCateService;
