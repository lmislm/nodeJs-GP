/**
 * Created by Administrator on 2017/4/26.
 */
/*
* 模块依赖
* */
var net = require('net')

var server = net.createServer(function (conn) {
    //握手连接
    console.log('\033[90m   new connection!\033[39m');
});
server.listen(3000,function () {
    console.log('\033[96m   server listening on *:3000\033[39m');
});
/*
* 运行$telnet 127.0.0.1 3000
*   显示  new connection
*   creatServer 回调函数接收一个对象，即Node常见实例：流 (Stream)
* */