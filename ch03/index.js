// 导入模块默认值
import divide from "./Modules.js";
// 导入多个绑定
import {color, name, sizeOfPage} from "./Modules.js";
// 导入单个绑定
import {multiply} from "./Modules.js";
// 因Modules模块中导出subtract函数时使用了名称sub，这里导入也要用该名称
import {sub} from "./Modules.js";
// 导入时重命名导入的函数
import {sum as add} from "./Modules.js";
// 导入类
import {Car} from "./Modules.js";
// 导入整个模块
import * as example from "./Modules.js";

console.log(color);           //red
console.log(name);            //module
console.log(sizeOfPage);      //10
// 只能用add而不能用sum了
console.log(add(6, 2));       //8
console.log(sub(6, 2));       //4
console.log(multiply(6, 2));  //12
console.log(divide(6, 2));    //3
let car = new Car("black", 4);
car.showColor();              //black
console.log(example.name);    //module
// 注意这里是sum，而不是add
console.log(example.sum(6, 2)); // 8
// count是Modules模块中私有的变量，在外部不能访问
console.log(example.count);   //undefined
// changeCount()函数是Modules模块中私有的函数，在外部不能访问
console.log(example.changeCount());   //TypeError: example.changeCount is not a function