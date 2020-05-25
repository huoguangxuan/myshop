'use strict';

const Controller = require('../../core/base_controller')

class CateController extends Controller {
    async cate(){
    const {ctx}= this
    const rs = await ctx.service.goodscate.getCate()
    this.success(rs)
  }
  async addCate(){
    const {ctx}= this 
    const data = await ctx.service.goodscate.addCate(ctx.request.body)
      this.success(data)
  }
  async destroyCate(){
    const {ctx}= this 
    const id = ctx.params.id
    const data = await ctx.service.goodscate.destroyCate(id)
    this.success(data)
  }
}
module.exports = CateController;