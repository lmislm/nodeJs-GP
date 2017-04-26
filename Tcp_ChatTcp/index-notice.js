/**
 * Created by Administrator on 2017/4/26.
 */
var net = require('net')

var count = 1;
var server = net.createServer(function (conn) {
    conn.write(
        '\n > welcome \033[92mChat\033[39m!'
    +   '\n > ' + count + 'people are connected at this time'
    +   '\n > please write your name and press enter:'
    );
    count ++;
});
server.listen(3000,function () {
    console.log(' \033[[96m listening on *:3000\033[39m');
});