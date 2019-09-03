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
}

module.exports = GoodsController;
