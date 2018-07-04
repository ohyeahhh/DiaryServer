/**
 * Created by mac on 2018/7/4.
 */

//格式化输出
exports = module.exports = function (error, data) {
    if (error){
        console.log(error);
        return {code:'500', data, error};
    }else {
        return {code:'200',data};
    }
}