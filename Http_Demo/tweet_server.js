/**
 * Created by Administrator on 2017/4/28.
 */
var qs = require('querystring');
require('http').createServer(function (req, res) {
    var body = '';
    req.on('data',function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        res.writeHead(200);
        res.end('Done');
        //parse请求内容解析
        console.log('\n Got name \033[90m' + qs.parse(body).name + '\033[90m');
    });
}).listen(3000);