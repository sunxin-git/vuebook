/*
//函数内部
function changeState(flag){
	if(flag){
		var color = "red";
	}
	else{
		console.log(color);  //此处可以访问变量color，其值为：undefined
		return null;
	}
}
changeState(false);

//块中
{
  var a = 1;
}
console.log("a = " + a);  //此处可以访问变量a，输出：a = 1

//for循环中
for(var i = 0; i < 10; i++){
}
console.log("i = " + i); //此处可以访问变量i，输出：i = 10*/

/*
//函数内部
function changeState(flag){
	if(flag){
		let color = "red";
	}
	else{
		console.log(color);  //此处不能访问color，报错：color is not defined
		return null;
	}
}
changeState(false);

//块中
{
  let a = 1;
}
console.log("a = " + a);  //此处不能访问变量a，报错：a is not defined

//for循环中
for(let i = 0; i < 10; i++){
}
console.log("i = " + i); //此处不能访问变量i，报错：i is not defined
*/

/*var index = 0;
var index = 10;  //OK
let index = 100; //报错：Identifier 'index' has already been declared */

/*var index = 0;
{
	let index = 10;  //OK
}*/

/*const sizeOfPage = 10;  //正确

const maxItems;          //错误
maxItems = 200;*/

/*const person = {
	name: "zhangsan"
};

person.name = "lisi";  //OK
person.age = 20;       //OK

//错误，报错：Assignment to constant variable.
person = {
	name: "wangwu"
};*/





