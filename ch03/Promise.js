/*const promise = new Promise(function(resolve, reject) {
  // 开启异步操作
  
  if ( 异步操作成功 ){
    resolve(result);
  } else {
    reject(error);
  }
});*/

/*const promise = new Promise(function(resolve, reject) {
	console.log("executor");
	resolve();
});

promise.then(function(){
	console.log("then");
})
*/


/*const promise = new Promise(function(resolve, reject) {
	// 开启异步操作
  setTimeout(function(){
  	try{
  		let c = 6 / 0 ;
  		// 执行成功调用resolve函数
  		resolve(c);
  	}catch(ex){
  		// 执行失败调用reject函数
  		reject(ex);
  	}
  }, 1000);
});*/


/*promise.then(function(value){
	// 完成
	console.log(value);  // 3
},function(err){
	// 拒绝
	console.error(erro.message);
})

promise.then(null,function(err){
	// 拒绝
	console.error(err.message);
})

prommise.catch(function (err){
	console.error(err.message);
})*/

/*promise.then(function(value){
	// 完成
	console.log(value);  // 3
}).catch(function (err){
	// 拒绝
	console.error(err.message);
});

promise.then(value => console.log(value))
       .catch(err => console.error(err.message));*/
       

/*const promise = new Promise((resolve, reject) => {
	// 调用setTimeout模拟异步操作
	setTimeout( ()=> {
		let intArray = new Array(20);
		for(let i=0; i<20; i++){
			intArray[i] = parseInt(Math.random() * 20, 10);
		}
		// 成功后调用resolve
		resolve(intArray);
	},1000);
	// 该代码会立即执行
	console.log("开始生成一个随机数的数组")
});
	
promise.then(value => {
	value.sort((a,b) => a-b);
	return value;
	}).then(value => console.log(value));

*/

const promise = new Promise((resolve, reject)=>{
	resolve("Hello Word");
});

promise.then((value) => {
	console.log(value);
	throw new Error("错误");
}).catch(err => console.error(err.message));
