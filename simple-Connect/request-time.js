/**
 * Created by Administrator on 2017/5/30.
 */
/*
* 请求时间中间件
*
* @param {Object} options
* @api public
* */
module.exports = function (opts) {
   var time = opt.time || 100;
   return function (req, res, next) {//返回一个中间件函数
       var timer =setTimeout(function () {
           console.log(
               '\033[90m%s %s\033[90m \033[91m is taking too long! \033[39m'
           ,    req.method
           ,    req.url
           );
       },time)
       var end = res.end;
       res.end = function (chunk, encoding) {
           res.end = end;
           res.end = (chunk, encoding);
           clearTimeout(timer);
       };
       next();
   }
}