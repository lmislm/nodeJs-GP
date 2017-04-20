/**
 * Created by Administrator on 2017/4/18.
 */
// var fs = require('fs');
// // console.log(require('fs').readdirSync(_dirname));
// fs.readdir('.',function (err, files) {
//     console.log(files);
// });
// // console.log('hello');

var fs = require('fs');
fs.readdir(process.cwd(), function (err, files) {
    /*换行*/
    console.log('');
    if(!files.length){
        /*没有则\033[31m等显示红色文本*/
        return console.log('    \033[31m 该目录下没有文件！\033[39m\n');
    }
    console.log('   选择你想看的文件夹或目录');
    /*读取stdin函数*/
    function file(i) {
        var filename = files[i];
        /*找出文件或目录元数据*/
        fs.stat(__dirname + '/' + filename,function (err, stat) {
            if(stat.isDirectory()){
                console.log('' +i+ '    \033[36m' + filename + '/\033[39m');
            }else {
                console.log('' +i+ '    \033[90m' + filename + '/\033[39m');
            }
            /*流控制中心，检查是否有未处理文件*/
            i++;
            if(i == files.length){
                console.log('');
                process.stdout.write('  \033[33m输入选择：\033[39m');
                /*等待用户输入*/
                process.stdin.resume();
            }else {
                file(i);
            }
        });
    }
    file(0);
});