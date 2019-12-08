// 真实应用场景中，book对象通常是从服务器端得到的数据
/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98,
	category: {
		id: 1,
		name: "Web前端"
	}
}
// 提取对象中的数据赋给变量
let title = book.title;
let isbn = book.isbn;
let price = book.price;
let category = book.category.name;

// 提取数组中的数据赋给变量
let arr = [1, 2, 3];
let a = arr[0], b = arr[1], c=arr[2];
*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98
}
let {title, isbn, price} = book;
console.log(title);  // Vue无难事
console.log(isbn);   // 9787121362217
console.log(price);  // 98*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98
}

let title, isbn, price;
//{title, isbn, price} = book;  // 语法错误
({title, isbn, price} = book);  // 正确*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98
}
let title, isbn;

function outputBookInfo(book){
	console.log(book);
}
// 给title、isbn变量赋值后，因解构表达式的值是=右侧的值，
// 所以此处向outputBookInfo()函数传递的参数就是book对象
outputBookInfo({title, isbn} = book); 
console.log(title); // Vue无难事
console.log(isbn);  // 9787121362217*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98
}

let {title, isbn, salesVolume = 0} = book;
console.log(title);         // Vue无难事
console.log(isbn);          // 9787121362217
console.log(salesVolume);   // 0*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98
}

let {title: bookTitle, isbn: bookIsbn} = book;
console.log(bookTitle);   // Vue无难事
console.log(bookIsbn);    // 9787121362217*/

/*let book = {
	title: "Vue无难事",
	isbn: "9787121362217",
	price: 98,
	category: {
		id: 1,
		name: "Web前端"
	}
}

//let {category: {name}} = book; //局部变量名为name
let {title, isbn, category: {name: category}} = book;
console.log(title);       // Vue无难事
console.log(isbn);        // 9787121362217
console.log(category);    // Web前端
*/

/*let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a);  //1
console.log(b);  //2
console.log(c);  //3*/

/*let arr = [1, 2, 3];
let [, , c] = arr;
console.log(c);  //3
*/

/*let arr = [1, 2, 3];
let a, b, c;
[a, b, c] = arr;   //OK
console.log(c);*/

/*let arr = [1, 2, 3];
let [a, b, c, d = 0] = arr;
console.log(d);  //0*/

/*let categories = ["C/C++", ["Vue", "React"], "Java"];

let [language1, [, language2]] = categories;

console.log(language1);  // C/C++
console.log(language2);  // React
*/


/*let arr = [1, 2, 3];
let [a, ...others] = arr;
let [...newArr] = arr;  // 数组复制的另一种实现方式
console.log(a);         // 1
console.log(others);    // [ 2, 3 ]
console.log(others[0])  // 2
console.log(newArr);    // [ 1, 2, 3 ]*/

let person = {
	name: '张三',
	age: 18
}

let {...newObject} = person;
let {anotherObjct} = person;
let{name, age, gendar} = {...person, gendar: '男'};
console.log(newObject);  // { name: '张三', age: 18 }
console.log(anotherObjct); // undefined
console.log(name);       // 张三
console.log(gendar);     // 男



