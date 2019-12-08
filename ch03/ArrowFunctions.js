//let welcome = msg => msg;

/*
 *相当于
function welcome(msg){
	return msg;
}
 */
 
//console.log(welcome("welcome you."));  // welcome you.

//let welcome = (user, msg) => `${user}, ${msg}`;

/*
 *相当于
function welcome(user, msg){
	return user + ", " + msg;
}
 */

//console.log(welcome("zhangasan", "welcome you."));  // zhangasan, welcome you.

//let welcome = () => "welcome you.";

/*
 *相当于
function welcome(){
	return "welcome you.";
}
 */

//console.log(welcome("welcome you."));  // welcome you.

/*let add = (a, b) => {
	let c = a + b;
	return c;
}*/

/*
 *相当于
function add(a, b){
	let c = a + b;
	return c;
}

 */

//console.log(add(5, 3));  // 8

//let emptyFunction = () => {};
/*
 *相当于
function emptyFunction(){}
 */

//let createCar = (color, doors) => ({color: color, doors: doors});

/*
 *相当于
function createCar(color, doors){
	return {
		color: color,
		doors: doors
	}
}
 */

//console.log(createCar("black", 4));  // { color: 'black', doors: 4 }

//let personInfo = ({name, age}) => `${name}'s age is ${age} years old.`;

/*
 *相当于
function personInfo({name, age}){
	return `${name}'s age is ${age} years old.`;
}
 */
 
//let person = {name: "zhangsan", age: 18};
//console.log(personInfo(person)); // zhangsan's age is 18 years old.



