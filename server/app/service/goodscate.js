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
    console.log(item)
    const desStr=item.keyWords.join(',')
    const val={
      title:item.name,
      pid:Number(item.pid),
      status:Number(item.status),
      describtion:desStr
    }
    console.log(val)
    // await this.ctx.model.GoodsCate.findOrCreate({where: {title: item.name}, defaults: val})
    //       .then((goodsCate,created )=>{
    //         console.log(goodsCate.get({
    //           plain: true
    //         }))
    //         console.log(created)
    //       })
  }
}

module.exports = GoodsCateService;
