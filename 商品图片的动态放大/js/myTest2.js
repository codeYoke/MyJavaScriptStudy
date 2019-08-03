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
			console.log('Cleartime1');
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
						console.log('Cleartime1');
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
