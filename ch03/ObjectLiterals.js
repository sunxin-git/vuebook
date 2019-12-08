/*function createCar(color, doors){
	return {
		color : color,
		doors : doors
	}
}*/

/*let name = "zhangsan";
let age = 18;

var person = {name: name, age : age};
console.log(person);*/


/*function createCar(color, doors){
	return {
	  // 有同名的参数，只写属性名即可
		color,
		doors
	}
}
let car = createCar("red", 4);
console.log(car);

let name = "zhangsan";
let age = 18;
// 有同名的本地变量，只写属性名即可
var person = {name, age};
console.log(person);
*/

/*var car = {
	color: "red",
	doors: 4,
	showColor: function(){
		console.log(this.color);
	}
}*/
/*var car = {
	color: "red",
	doors: 4,
	showColor(){
		console.log(this.color);
	}
}
car.showColor();
console.log(car.showColor.name);*/



/*let suffix = "name";
let person = {};
person["first name"] = "san";      // 属性名中有空格
person["last " + suffix] = "zhang";  // 属性名由表达式计算得到
person.age = 20;                   // 常规的属性可以直接通过点号访问
console.log(person);               // { 'first name': 'san', 'last name': 'zhang', age: 20 }
*/

/*let suffix = "name";
let person = {
	["first " + suffix] : "san",
	["last " + suffix]: "zhang",
	age: 20
}
console.log(person); // { 'first name': 'san', 'last name': 'zhang', age: 20 }
*/