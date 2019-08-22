

module.exports = options=>{
    return async function reqUrl(ctx,next){
        console.log(ctx.request)
        await next()
    }
}



//编写
//配置
//使用

//场景不同，使用方法又不同