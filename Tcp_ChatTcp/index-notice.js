/**
 * Created by Administrator on 2017/4/26.
 */
var net = require('net')

var count = 1;
var server = net.createServer(function (conn) {
    conn.write(
        '\n > welcome \033[92mChat\033[39m!'
    +   '\r\n > ' + count + ' people are connected at this time'
    +   '\r\n > please write your name and press enter:'
    );
    count ++;
    //监听data事件，接收数据为Buffer
    var str = "";
    conn.on('data',function (data) {
        str += data;
        console.log(str);
    });
    //net.Stream#setEncoding设置编码
    conn.setEncoding('utf8');
    //计数器递减
    conn.on('close', function () {
        count--;
    });

});
server.listen(3000,function () {
    console.log(' \033[[96m listening on *:3000\033[39m');
});
