module.exports = {
    statusConvert(status){
        if (status==0){
            return '启动'
        }else{
            return '未启用'
        }
    }
}