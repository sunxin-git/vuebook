// 导出数据
export var color = "red";
export let name = "module";
export const sizeOfPage = 10;

// 导出函数
export function sum(a, b){
	return a + b;
}

// 将在模块末尾进行导出
function subtract(a, b){
	return a - b;
}

// 将在模块末尾进行导出
function multiply(a, b){
	return a * b;
}

// 将在模块末尾进行导出
function divide(a ,b){
	if(b !== 0)
		return a / b;
}
// 导出类
export class Car {
	constructor(sColor, iDoors){
		this.color = sColor;
		this.doors = iDoors;
	}
	showColor(){
		console.log(this.color);
	}
}
// 模块私有的变量
var count = 0;
// 模块私有的函数
function changeCount(){
	count++;
}
/*
// 导出multiply函数
export {multiply};
// subtract是本地名称，sub是导出时使用的名称
export {subtract as sub}
// 导出模块默认值
export default divide;*/
export {multiply, subtract as sub, divide as default};


/*
// 第二种语法形式
// 使用default关键字导出一个函数作为模块的默认值，
// 因为导出的函数被模块所代表，所以它不需要一个名称
export default function(a ,b){
	if(b !== 0)
		return a / b;
}
// ----------------------- //
function divide(a ,b){
	if(b !== 0)
		return a / b;
}
// 第三种语法形式
export {divide as default}
*/

