/**
 * Created by Administrator on 2017/4/29.
 */
var http = require('http'),
    fs = require('fs')

var server = http.createServer(function (req, res) {
    console.error('%s %s',req.method,req.url);
    if('GET' == req.method && '/images' == req.url.substr(0, 7)
        && '.jpg' == req.url.substr(-4)){
        fs.stat(__dirname + req.url, function (err, stat) {
            if(err || !stat.isFile){
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            serve(__dirname + req.url, 'application/jpg');
        });
    }else if('GET' == req.method && '/' == req.url){
        serve(__dirname + '/index.html','text/html'); //路径bug
    }else{
        res.writeHead(404);
        res.end('Not Found');
    }
    function serve(path, type) {
        res.writeHead(200, {'Content-Type':type});
        fs.createReadStream(path).pipe(res);
    }
});
server.listen(3000);
// var connect = require('connect')
// /*
// * 创建服务器
// * */
// var server = connect.createServer();
// /*
// * 处理中间件
// * */
// // server.use(connect.static(__dirname + '/website'));
// server.use(connect.static(__dirname + './website'));
// server.listen(3000);