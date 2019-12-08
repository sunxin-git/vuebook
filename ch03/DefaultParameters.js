/*function makeRedirect(url, timeout)
{
	//url = url || "/home";
	//timeout = timeout || 2000;
	
	url = (typeof url != "undefined") ? url : "/home";
	timeout = (typeof timeout != "undefined") ? timeout: 2000;
	//函数的其余部分
}*/

function makeRedirect(url = "/home", timeout = 2000, callback)
{
	console.log(url);
	console.log(timeout);
	console.log(callback);
}

//使用url和timeout的默认值
makeRedirect();

//使用url和timeout的默认值
makeRedirect(undefined, undefined, function(){});

//使用timeout的默认值
makeRedirect("/login");

//不是用timeout的默认值
makeRedirect("/login", null, function(){});
