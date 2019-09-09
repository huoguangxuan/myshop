'use strict';

const Controller = require('../core/base_controller')

class GoodsController extends Controller {
  async index() {
    const {ctx}= this
    const goodList = [
      {
        id:'1',
        title:"apple",
        cat:"fruit"
      },
      {
        id:'2',
        title:"orange",
        cat:"fruit"
      }
    ]
    this.success(goodList)
  }
  async cate(){
    const {ctx}= this
    const rs = await ctx.service.goodscate.getCate()
    // console.log(rs)
    this.success(rs)
  }

  async addCate(){
    const {ctx}= this
    
    console.log(ctx.request.body)
    this.success()
  }
}

module.exports = GoodsController;
