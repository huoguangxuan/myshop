
'use strict';
exports.index = async ctx => {
      const userList = await ctx.service.users.find()
      console.log('123')
      ctx.body={
          code:0,
          data:userList,
          message:'请求成功'
      }
};

exports.new = async () => {};

exports.create = async ctx => {
   console.log(ctx.query)
};

exports.show = async () => {};

exports.edit = async () => {};

exports.update = async () => {};

exports.destroy = async () => {};