'use strict';

const Service = require('egg').Service;

class CategoriesService extends Service {
  async getList() {
    var list = ['1111','222','333']
    return list
  }
}

module.exports = CategoriesService;
