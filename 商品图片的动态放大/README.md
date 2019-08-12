### 一.实现效果展示：

---
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190801214350601.gif)
### 二.代码实现

---
**1.html部分：**

 - 使用两张图片，一张是放大图，一张原图。
 - w  h 属性是为了在js可以直接获取，其实就是一个用户指定大图的宽高值

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>商品广告放大显示</title>
        <link rel="stylesheet" type="text/css" href="css/reset.css"/>
        <link rel="stylesheet" type="text/css" href="css/myTest2.css"/>
        <script src="js/myTest2.js" type="text/javascript" charset="utf-8"></script>
    </head>
	<body>
        <p id="ad">
            <a href="img/apple_1_bigger.jpg" h="330" w="400" title="高颜值MP3音乐播放器">
                <img src="img/apple_1.jpg" >
            </a> 
        </p>
	</body>
</html>

```
**2.css部分：**

 - 大图样式预先设置好，当鼠标进入时，将div （bigImg）加进去
 - 宽高先设置为0，在js里动态增加，实现动态变化

```css
body{
    padding: 200px;
}
#ad img{
    border: 1px solid gray;
}
.bigImg{
    width: 0px; /* 400*/
    height: 0px;/* 330 */
    background-color: #000000;
    padding: 10px;
    position: absolute;
    overflow: hidden;
}
.bigImg p {
    font-size: 18px;
    line-height: 28px;
    color: #FFFF00;
}
```
**3.js部分：**

 - 获取鼠标的偏移量，如果不设置就会出现onmouseover 和onmouseout 两个监听来回切换出现卡顿
 - 鼠标移入事件之前，清除定时器也是必要的，当它宽高为达到最大值时，鼠标就移开，再次移入，上次的定时器未得到清除，出现只产生部分图片。

```javascript
var img = null;
var time = null;
window.onload = function() {
	img = document.getElementById('ad').getElementsByTagName('img')[0];
	console.log(img);
	img.onmouseover = function(event) {
		console.log('mouseIn');
		//鼠标移入
		//移入后就创建节点将放大图片显示页面上
		var div = document.createElement('div');
		div.id = 'bigImg';
		div.className = 'bigImg'
		//创建img标签
		var img = document.createElement('img');
		img.src = this.parentNode.href;
		//将img放入到div中
		div.appendChild(img);
		// console.log(div)
		//创建p标签，并将新产生的div放到body元素中
		var p = document.createElement('p');
		p.innerHTML = this.parentNode.title;
		console.log(this.parentNode.title) //将标题取到并放到新的p节点

		div.appendChild(p);
		//将div节点放入body元素中并显示出来 
		document.body.appendChild(div);

		//启动定时器通过改变元素div的高宽实现动态放大 

		//获取预先定义好的h w 将其设为最终的高宽
		var w = this.parentNode.getAttribute('w');
		var h = this.parentNode.getAttribute('h');
		console.log(w + ':' + h);
		if (null != time) {
			console.log('Cleartime');
			clearInterval(time);
			time = null;
		}
		if (time == null) {
			time = window.setInterval(function() {

				/* console.log(div) */
				//获取弹出框div的高和宽
				var width = div.style.width ? div.style.width : document.defaultView.getComputedStyle(div, null).width;
				var height = div.style.height ? div.style.height : document.defaultView.getComputedStyle(div, null).height;
				console.log(width + ':' + height);
				width = parseInt(width) + 5;
				height = parseInt(height) + 5;


				if (height > h) {
					height = h;
				}
				if (width > w) {
					width = w;
				}

				div.style.width = width + 'px';
				div.style.height = height + 'px';

				if (width == w && height == h) {
					if (null != time) {
						console.log('Cleartime');
						clearInterval(time);
						time = null;
					}

				}
			}, 10)

		}
		//获取鼠标的坐标值,确保鼠标进入区域就开始
		var evt = event ? event : window.event;
		var x = evt.pageX + 5;
		var y = evt.pageY + 5;
		console.log("鼠标的位置" + x + ':' + y);

		div.style.top = y + 'px';
		div.style.left = x + 'px';


	}
	//鼠标移开
	img.onmouseout = function(event) {
		console.log('onmouseOut')
		//删除创建的div
		var div = document.getElementById('bigImg');
		div.remove()
	}



	//鼠标移动
	img.onmousemove = function(event) {
		console.log('moveIn')
		//记录鼠标的当前位置
		//获取鼠标的坐标值
		var div = document.getElementById('bigImg');
		var evt = event ? event : window.event;
		var x = evt.pageX + 5;
		var y = evt.pageY + 5;
		console.log("鼠标的位置" + x + ':' + y);
		div.style.top = y + 'px';
		div.style.left = x + 'px';
	}

}

```

