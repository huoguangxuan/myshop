module.exports={
    SUCCESS_CODE: 0, // 成功
    NO_LOGIN_CODE: 100, // 未登录
    UNIQUE_CODE: 200, // 唯一性冲突
    ERROR_CODE: 500, // 失败

    //获取token
    getAccessToken(){
        return this.cookies.get('s_token',{signed:false});
    },

    //设置token

    setToken(data={}){
        const {app} =this;
        let {username,uid} =data;
        //如果需要得到精确的结果，需要自己另加额外的控制标志位
        
        if(decodeURI(username)===username){
            username = encodeURI(username)
        }
        const token = app.jwt.sign(data,app.config.jwt.secret,{expiresIn:'12h'})
        // console.log(token)
        const cookieConfig = {
            maxAge: 1000 * 3600 * 24 * 7,
            httpOnly:false,
            overwrite:true,
            signed:false
        }
        this.cookies.set('s_token',token,cookieConfig)
        this.cookies.set('username',username,cookieConfig)
        this.cookies.set('uid',uid,cookieConfig)
    },
    removeToken() {
        this.cookies.set('s_token', null);
      },
      // 校验token
      async verifyToken() {
        const { app } = this;
        const username = this.cookies.get('username', { signed: false });
        const userid = this.cookies.get('uid', { signed: false });
        const token = this.getAccessToken(this);
        const verifyResult = await new Promise(resolve => {
          app.jwt.verify(token, app.config.jwt.secret, (err, decoded) => {
            if (err) {
              if (err.name === 'TokenExpiredError' && userUuid) {
                this.setToken({ username, userid}); // 刷新token
                resolve({ verify: true, message: { userid } });
              } else {
                resolve({ verify: false, message: err.message });
              }
            } else {
              resolve({ verify: true, message: decoded });
            }
          });
        });
        if (!verifyResult.verify) {
          this.verifyFail(401, verifyResult.message);
          return false;
        }
        if (userid != verifyResult.message.uid) {
          this.verifyFail(401, '用户 UID 与 Token 不一致');
          return false;
        }
        this.request.body.uid = userid;
        this.request.body.username = username;
        // 将get请求的ctx.query合并到ctx.request.body，这里这么做是暂时的想法，我再考虑下
        this.request.body = { ...this.request.body, ...this.query };
        return true;
      },
      // 校验token失败
      verifyFail(code, message) {
        this.body = { code, message };
        this.status = code;
      },
}