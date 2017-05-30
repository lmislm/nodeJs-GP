/**
 * Created by Administrator on 2017/5/30.
 */

var connect = require('connect')//模块依赖
    , time = require('./request-time');

var server = connect.createServer();//创建服务器
server.use(connect.logger('dev'));// 记录请求情况
server.use(time({time:500}));//实现时间的中间件
server.use(function (req, res, next) {//慢速相应
    if('/b' == req.url){
        setTimeout(function () {
            res.writeHead(200);
            res.end('slow!');
        },1000);
    }else {
        next();
    }
});
server.listen(3000);
