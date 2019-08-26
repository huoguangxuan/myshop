'use strict';

const Controller = require('egg').Controller;
/** 
 * BaseController
 * @class
 * 
 */
class BaseController extends Controller {
    get user() {
        return this.ctx.session.user;
    }

    success(data,status) {  
        this.ctx.body={
            code: this.ctx.SUCCESS_CODE,
            data,
        }
        this.ctx.status = status || 200;
    }
    faild(data,status){
        this.ctx.body={
            code:this.ctx.ERROR_CODE,
            data:data        
        }
        this.ctx.status = status || 500;
    }
    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404,msg);
    }
}


module.exports = BaseController;