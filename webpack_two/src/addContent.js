// export default function () {
//     document.write('修改后的addContent')
//     document.write('测试webpack-dev-server的live-reloading，当webpack-dev-server发现工程源文件进行了更新操作就会自动刷新浏览器，显示更新后的内容')
// }
/////////////////////////////////////////////////////////commonJS语法
/*console.log('addContent.js')
const content = {
    name: 'zhaoyinping',
    add: () => {
       return '执行了addContent.js的add函数(commomJS语法)'
    }
};


module.exports = content*/
 ////////////////////////////////////////////////////////////ES6语法
console.log(123)
export default {
    name: 'zhaoyinping',
    add: () => {
        return '执行了addContent.js的add函数(ES6语法)'
    }
}

