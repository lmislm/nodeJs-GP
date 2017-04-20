/**
 * Created by Administrator on 2017/4/18.
 */
// var fs = require('fs');
// // console.log(require('fs').readdirSync(_dirname));
// fs.readdir('.',function (err, files) {
//     console.log(files);
// });
// // console.log('hello');

// var fs = require('fs');
// fs.readdir(process.cwd(), function (err, files) {
//     /*换行*/
//     console.log('');
//     if(!files.length){
//         /*没有则\033[31m等显示红色文本*/
//         return console.log('    \033[31m 该目录下没有文件！\033[39m\n');
//     }
//     console.log('   选择你想看的文件夹或目录');
//     /*读取stdin函数*/
//     function file(i) {
//         var filename = files[i];
//         /*找出文件或目录元数据*/
//         fs.stat(__dirname + '/' + filename,function (err, stat) {
//             if(stat.isDirectory()){
//                 console.log('' +i+ '    \033[36m' + filename + '/\033[39m');
//             }else {
//                 console.log('' +i+ '    \033[90m' + filename + '/\033[39m');
//             }
//             /*流控制中心，检查是否有未处理文件*/
//             i++;
//             if(i == files.length){
//                 console.log('');
//                 process.stdout.write('  \033[33m输入选择：\033[39m');
//                 /*等待用户输入*/
//                 process.stdin.resume();
//             }else {
//                 file(i);
//             }
//         });
//     }
//     file(0);
// });
/*重构
* 代码异步，
* 随函数增长和流控制层的增加
 * 程序可读性变差
* */

/*创建快捷变量*/
var fs = require('fs')
    , stdin = process.stdin
    , stdout = process.stdout

fs.readdir(process.cwd(), function (err, files) {
    /*换行*/
    console.log('');
    if (!files.length) {
        /*没有则\033[31m等显示红色文本*/
        return console.log('    \033[31m 该目录下没有文件！\033[39m\n');
    }
    console.log('   选择你想看的文件夹或目录');
/*抽离一个读取stdin函数*/
function file(i) {
    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function (err, stat) {
        if(stat.isDirectory){
            console.log('   '+i+'   \033[36m' + filename + '/\033[39m');
        }else {
            console.log('   '+i+'   \033[90m' + filename + '\033[39m');
        }
        if(++i == files.length){
            read();
        }else {
            file(i);
        }
    });
}
/*获取用户输入*/
function read() {
    console.log('');
    stdout.write('  \033[33m输入选择：\033[39m');
    stdin.resume();
    /*将字符串转为Number类型做检查*/
    stdin.setEncoding('utf-8');
}
/*根据用户输入来处理*/
function read() {
    stdin.on('data', option);
}
function option(data) {
    if(!files[Number(data)]){
        stdout.write('  \033[31m输入选择：\033[39m');
    }else {
        stdin.pause();
    }
}
});
