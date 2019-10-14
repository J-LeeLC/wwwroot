//获取所有图片项目
var innerItems = document.getElementsByClassName("item");
//获取所有指示器项目
var indicatorsLists = document.getElementsByTagName("li");
//获取导航控制左链接对象
var controlLeft = document.getElementsByClassName("left")[0];
//获取导航控制右链接对象
var controlRight = document.getElementsByClassName("right")[0];
//设置初始化时从第1张图片开始
var current = 0;
//添加active样式实现初始化图片的显示
innerItems[current].className = "item active";
//添加active样式实现初始化图片的对应的指示器填充白色
indicatorsLists[current].className = "active";
//轮播函数开始
function slide() {
    for (var i = 0, len = indicatorsLists.length; i < len; i++) {
        //设置所有图片不可见
        innerItems[i].className = "item";
        //设置所有指示不高亮
        indicatorsLists[i].className = "";
        indicatorsLists[i].index = i;
        //给所有指示器添加单击事件
        indicatorsLists[i].onclick = function () {
            // 如果单击的指示器跟当前页相同，则停止执行，返回
            if (this.index == current) {
                return false;
            } else {
                current = this.index;
                slide();
            }
        }
    }
    innerItems[current].className = "item active";
    indicatorsLists[current].className = "active";
    console.log(current);
}

//对导航控制左链接绑定单击事件，实现后退
controlLeft.onclick = function () {
    current--;
    if (current == -1) {
        current = indicatorsLists.length - 1;
    }
    slide();
}
//对导航控制右链接绑定单击事件，实现前进
controlRight.onclick = function () {
    current++;
    if (current == indicatorsLists.length) {
        current = 0;
    }
    slide();
}
//开始自动轮播
var timer = setInterval(controlRight.onclick, 3000);

//鼠标移入到导航控制链接上时停止轮播
controlLeft.onmouseover = controlRight.onmouseover = function () {
    clearInterval(timer);
    controlLeft.style.opacity = 1;
    controlRight.style.opacity = 1;
}

//鼠标移出导航控制链接上时恢复轮播
controlLeft.onmouseout = controlRight.onmouseout = function () {
    timer = setInterval(controlRight.onclick, 3000);
    controlLeft.style.opacity = 0;
    controlRight.style.opacity = 0;
}

