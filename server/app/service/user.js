const Service = require('egg').Service;

class UserService extends Service {
    
  async find(uid) {
    const {ctx} =this
    const admin = ctx.model.Admin.findAll({
      where:{
        id:uid
      }
    })
    return admin;
  }
}

module.exports = UserService;