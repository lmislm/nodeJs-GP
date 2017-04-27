/**
 * Created by Administrator on 2017/4/27.
 */

var net = require('net')

var count = 1
    ,   users = {};
var server = net.createServer(function (conn) {
    conn.write(
        '\n > welcome \033[92mChat\033[39m!'
    +   '\r\n > ' + count + 'people are connected at this time'
    +   '\r\n > please write your name and press enter:'
    );
    count ++;
    conn.on('data',function (data) {
        data = data.replace('\r\n','');
        console.log(data);
        //引入nickname变量
        var nickname;
        //删除回车符
        if(!nickname) {
            //如果用户名称已经存在
            if(users[data]) {
                conn.write('\033[39m>   nickname already in use.try again :\033[39m');
                return;
            }else{
                nickname = data;
                users[nickname] = conn;
                for(var i in users) {
                    users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
                }
            }
        }else{
        //视为聊天消息
            for(var i in users) {
                if(i != nickname) {
                    users[i].write('\033[96m > ' + nickname + ':\033[39m    ' + data + '\n');
                }
            }
        }
    });
    conn.setEncoding('utf8');

    conn.on('close', function () {
        count--;
    });
});
server.listen(3000,function () {
    console.log(' \033[[96m listening on *:3000\033[39m');
});
/*
* 添加状态变量，用户：user
* */