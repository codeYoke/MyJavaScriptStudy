//如何获取滚动条的距离
//如何移动元素的距离
//如何移动元素自己的大小
//如何可视窗体的宽度和高度
	
window.onload = function(){
	var time = null;//定时器
	ad = document.getElementById('ad');
	
	
	//定时器定时刷新
	if(time == null){
		time = window.setInterval(moveImg,50)
	}
}

var moveX = 1;//1表示正向移动，-1表示反向移动
var moveY = 1;//1表示正向移动，-1表示反向移动
var size = 8;//用户定义的每次刷新移动的像素大小
function moveImg(){
	//每次调用在原来的top值加像素
	var top = MyToll.elementXY(ad).y;
	if(moveY == 1){
		top = top + size;
	}
	if(moveY == -1){
		top = top - size;
	}
	
	//边界值碰撞计算
	if(top >(MyToll.clientWH().y + MyToll.scrollXY().y -MyToll.elementWH(ad).y)){
		moveY = -1;
	}
	//其实在等于滚动条的值就触发
	if(top <= MyToll.scrollXY().y){
		moveY = 1 ;
	}
	
	var left =  MyToll.elementXY(ad).x;
	if(moveX == 1){
	    left = left + size;
	} 
	if(moveX == -1){
	    left = left - size;
	}
	
	if(left > (MyToll.clientWH().x + MyToll.scrollXY().x - MyToll.elementWH(ad).x)){
	    //做减法
	    moveX = -1;
	} 
	
	if(left <= MyToll.scrollXY().x ){
	    moveX = 1;
	}
	
	ad.style.top = top + 'px';
	ad.style.left = left + 'px';
	console.log(top +":"+MyToll.clientWH().y+":"+MyToll.scrollXY().y+":"+MyToll.elementWH(ad).y)
	console.log(left  + ":" +  (MyToll.clientWH().x + MyToll.scrollXY().x - MyToll.elementWH(ad).x))
}

/**
 * @param {Object} x 可表示left和width的值
 * @param {Object} y 可表示top和height的值
 */
function Result(x,y){
	this.x = x;
	this.y = y;
}

	
var MyToll = {
	//滚动条的xy距离(left top)
	scrollXY : function(){
		var left = document.documentElement.scrollLeft;
		var top = document.documentElement.scrollTop;
		return new Result(left,top);
	},
	
	//元素移动的距离(left top)
	elementXY : function(obj){
		var left = obj.style.left ? obj.style.left : document.defaultView.getComputedStyle(obj,null).left;
		var top = obj.style.top ? obj.style.top : document.defaultView.getComputedStyle(obj,null).top
		//由于带有像素值，将其转换为整形
		return new Result(parseInt(left),parseInt(top)); 
	},
	
	//可视窗体的高度和宽度
	clientWH : function(){
		var clientW = document.documentElement.clientWidth;
		var clientH = document.documentElement.clientHeight;
		return new Result(clientW,clientH);
	},
	
	//元素本身的大小
	elementWH : function(obj){
		var imgW = obj.offsetWidth;
		var imgH = obj.offsetHeight;
		return new Result(imgW,imgH);
	}
	
}