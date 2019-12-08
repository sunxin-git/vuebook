var Loading = {
	img : '',
	init(){
		img = document.createElement("img");
		img.setAttribute("src", "./images/loading.gif");
	},
	
	show(){
		document.body.appendChild(img);
	},
	
	close(){
		if(img)
			document.body.removeChild(img);
	}
}
Loading.init();
