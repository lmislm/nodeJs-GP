/**
 * Created by Administrator on 2017/4/28.
 */
/*
* 运行tweet_client和tweet_server同时进行
* */
var http = require('http'),
    qs = require('querystring')
    //发送数据
    function send(theName) {
        http.request({
            host: '127.0.0.1',
            port: 3000,
            url: '/',
            method: 'POST'
        }, function (res) {
            res.setEncoding('utf8');
            res.on('end', function () {
                console.log('\n \033[90m    request complete!\033[39m');
                process.stdout.write('\n    your name:  ');
            });
        }).end(qs.stringify({name: theName}));
    }
        process.stdout.write('\n    your name:  ');
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        process.stdin.on('data',    function (name) {
            send(name.replace('\n',''));
        })