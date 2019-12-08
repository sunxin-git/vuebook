//let arr = [1, 2, 3];
//console.log(...arr);

/*function sum(a, b, c){
	return a + b + c;
}

let arr = [1, 2, 3];
sum(...arr);
console.log(sum(...arr));*/

/*let arr1 = [1, 2, 3];
let arr2 = arr1;         //arr2与arr1是同一个数组对象
let arr3  = [...arr1];   //arr3与arr1是两个不同的数组对象

arr1[0] = 4;
console.log(arr2[0]);    //arr2中的元素同时被改变，输出：4
console.log(arr3[0]);    //输出：1*/

/*let arr1 = ['a'];
let arr2 = ['b', 'c'];
let arr3 = ['d', 'e'];
console.log([...arr1, ...arr2, ...arr3]); //[ 'a', 'b', 'c', 'd', 'e' ]*/

let book = {
	tille: "Vue无难事",
	price: 98
}
	
let bookDetail = {...book, desc: "a fine book"}
console.log(bookDetail); //{ tille: 'Vue无难事', price: 98, desc: 'a fine book' }



