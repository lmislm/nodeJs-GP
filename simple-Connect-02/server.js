/**
 * Created by Administrator on 2017/5/30.
 */
var connect = require('connect');
/*
* 创建服务器
* */
var server = connect.createServer();
/*
* 处理中间件
* */
// server.use(connect.static(__dirname + '/website'));
server.use(connect.static(__dirname + './website'));
server.listen(3000);