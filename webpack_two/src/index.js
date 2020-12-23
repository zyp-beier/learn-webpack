// import addContent from "./addContent";
// document.write('---------index');
// document.write('添加了webpack.config.js');
// document.write('<br/>');
// document.write('webpack-dev-serve:令Webpack进行模块打包，并处理打包结果的资源请求,作为普通的Web Server，处理静态资源文件请求');
// addContent();

/////////////////////////////////////////////////////////////////// commonJS语法
// console.log('index.js')
/*let add = require('./addContent').add;
console.log(add())
let name = require('./addContent').name
console.log('两个地方require了calculator.js，但其内部代码只执行了一遍');
let test = require('../components/public')
test.test()*/

/////////////////////////////////////////////////////////////////ES6语法
import addContent from "./addContent";
import './index.css'
import content from './content.html'

console.log(addContent.add());
// let div = document.createElement('div');
// div.innerText = 'heiheiehi';
document.write(content)
//////////////////////////////////////////////////////////////////////////
// import './sass.scss'
