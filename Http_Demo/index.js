/**
 * Created by Administrator on 2017/4/27.
 */
require('http').createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello <b>world</b>');
}).listen(3000);