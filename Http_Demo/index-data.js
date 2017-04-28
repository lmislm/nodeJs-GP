/**
 * Created by Administrator on 2017/4/28.
 */
//使用querystring模块获取提交表单的字段
var qs = require('querystring');
require('http').createServer(function (req, res) {
    if('/' == req.url){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end([
            '<form method="post" action="/url">',
            '<h1>My form</h1>',
            '<fieldset>',
            '<label>Personal information</label>',
            '<p>What is your name?</p>',
            '<input type="text" name="name">',
            '<p><button>Submit</button></p>',
            '</form>'
        ].join(''));
    }else if('/url' == req.url && 'POST' == req.method){
        var body = '';
        req.on('data',function (chunk) {
            body += chunk;
            console.log(chunk);
        });
        req.setEncoding('utf8');
        req.on('end',function () {
            res.writeHead(200, {'Content-Type':'text/html'});
            // res.end('<p>Content-Type: ' + req.headers['content-type'] + '</p>'
            // + '<p>Data:</p><pre>' + body + '</pre>');
            //使用querystring parse 方法对请求内容进行解析
            res.end('<p>Your name is <b>'+ qs.parse(body).name + '</b></p>');
        });
    }else {
        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(3000);