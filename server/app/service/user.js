const Service = require('egg').Service;
const md5 = require('md5')
const moment = require('moment')
class UserService extends Service {
    
  async find(uid) {
    const {ctx} =this
    const users=[
      {
          id:1,
          username:"huoguangxuan",
          nickname:"huohuo",
          avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          password:md5('123456'),
          mobile:'123456',
          email:'huohuo@163.com',
          role_id:1,
          add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
          is_super: false
      },
      {
          id:2,
          username:"gg",
          nickname:"huohuo",
          avatar:'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          password:md5('123456'),
          mobile:'123456',
          email:'ggsmida@163.com',
          role_id:1,
          add_time:moment().format('YYYY-MM-DD HH:mm:ss'),
          is_super: false
      },
  ]
    // const admin = ctx.model.Admin.findAll({
    //   where:{
    //     id:uid
    //   }
    // })
    return users;
  }
}

module.exports = UserService;