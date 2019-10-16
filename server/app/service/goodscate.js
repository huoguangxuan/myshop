'use strict';

const Service = require('egg').Service;

class GoodsCateService extends Service {
  async getCate() {
    const {ctx} =this
    var cates = await ctx.model.GoodsCate.findAll()
    // console.log(cates)
    return cates
  }
  async destroyCate(id){
    const {ctx} =this
    var childs= await ctx.model.GoodsCate.findByPk(id)
    await ctx.model.GoodsCate.destroy({
      where: {
        id
      }
    })
    await ctx.model.GoodsCate.destroy({
      where:{
        pid:id
      }
    })
  }
  async addCate(item){
    const desStr=item.keyWords.join(',')
    const val={
      title:item.name,
      pid:item.pid,
      status:Number(item.status),
      describtion:item.desc,
      keywords:desStr,
      sort:item.sort
    }
    const rs = await this.ctx.model.GoodsCate.findOrCreate({where: {title: val.title}, defaults: val})
    // .then(([goods_cate, created]) => {
    //   console.log(goods_cate.get({
    //     plain: true
    //   }))
    //   console.log(created)
    // })
    // console.log('service',rs[1])
    return rs[1]
  }
}

module.exports = GoodsCateService;
