#### 一.效果展示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190818170216603.gif)
#### 二.代码实现
**1.html代码**

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>好评</title>
		<link rel="stylesheet" type="text/css" href="../js7/css/reset.css"/>
		<link rel="stylesheet" type="text/css" href="css/myTest3.css"/>
		<script type="text/javascript">
			window.onload = function(){
				ul = document.getElementById('star');
				lis = ul.getElementsByTagName('li');
				for (var i = 0; i < lis.length; i++) {
					lis[i].onclick = function(){
						//被用户点击后弹框并提示分数
						//获取当前对象的对象名
						var className = this.className;//nostart
						//重新定义class,并弹出评分
						ul.className = "nostar " + className;
						var score = this.getElementsByTagName('a')[0].title;
						console.log(score);
						alert('评分：' + score);
					}
				}
			}
		</script>
	</head>
	<body>
		<ul class="nostar " id="star">
			<li class="onestar"><a title="1分"></a></li>
			<li class="twostar"><a title="2分"></a></li>
			<li class="threestar"><a title="3分"></a></li>
			<li class="fourstar"><a title="4分"></a></li>
			<li class="fivestar"><a title="5分"></a></li>
		</ul>
	</body>
</html>

```

**2.css代码**

```css
body{
	padding: 200px 600px;
}
.nostar{
	width: 80px;
	height: 16px;
	background: url(../img/star-matrix.gif) no-repeat;
	position: relative;
}

.nostar li {
    width: 16px;
    height: 16px;
    float: left;
    
}

.nostar li a{
     display: inline-block; 
    width: 16px;
    height: 16px; 
    position: absolute;
    /* text-indent: -999px; */ 
    /* 层级关系*/
     z-index: 10; 
}
.nostar li a:hover{
    /* 将a的大小变化 width 80 */
    left: 0px;
    width: 80px;
    background: url(../img/star-matrix.gif) no-repeat;
    z-index: 5;
}
.onestar{background-position: 0 -16px;}
.twostar{background-position: 0 -32px;}
.threestar{background-position: 0 -48px;}
.fourstar{background-position: 0 -64px;}
.fivestar{background-position: 0 -80px;}


.nostar li.onestar a:hover{ background-position: 0 -96px ;}
.nostar li.twostar a:hover{ background-position: 0 -112px ;}
.nostar li.threestar a:hover{ background-position: 0 -128px ;}
.nostar li.fourstar a:hover{ background-position: 0 -144px ;}
.nostar li.fivestar a:hover{ background-position: 0 -160px ;}
```

---
[3.代码下载](https://github.com/codeYoke/MyJavaScriptStudy/tree/master/%E4%BA%94%E6%98%9F%E5%A5%BD%E8%AF%84)
