#### 一：效果展示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190818162857999.gif)
#### 二.代码实现
**1.html代码：**
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>苍蝇</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css"/>
        <link rel="stylesheet" type="text/css" href="css/myTest2.css"/>
        <script src="js/myTest2.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
        <img src="img/timg.jpg" id="ad" />
	</body>
</html>

```
**2.css 样式文件**
格式化样式（可选）
```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
基础样式
```css
img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 100px;
}
body {
    height: 1024px;
    width: 2024px;
}
```

**3.js代码**
```javascript
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
```

