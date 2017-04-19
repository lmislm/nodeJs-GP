/**
 * Created by Administrator on 2017/4/18.
 */
var fs = require('fs');
// console.log(require('fs').readdirSync(_dirname));
fs.readdir('.',function (err, files) {
    console.log(files);
});
// console.log('hello');