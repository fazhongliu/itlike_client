//容器组件-内部选项卡切换
//面板切换代码
// 0.记录当前选项
let currentIndex = 0;
// 1.找到所有选项卡和面板元素
let tabs = document.querySelectorAll(".tabs>li");
let panes = document.querySelectorAll(".panes>li");
// 2.每一个选项卡，监听鼠标事件
for (let i = 0, len = tabs.length; i < len; i++) {
    tabs[i].onclick = function () {
        tabs[currentIndex].className = "";
        tabs[i].className = "current";
        panes[currentIndex].className = "";
        panes[i].className = "current";
        currentIndex = i;
    }
}

//实现评论面板 星星 评分效果
let score = 5
let star = document.querySelector(".comment-pane .star");
let y_star = document.querySelector(".comment-pane  .y_star");

star.onclick = function (event) {
    // console.log(event.offsetX)
    //上取整，计算星星数量
    score = Math.ceil(event.offsetX / star.offsetWidth * 5)
    // console.log(score)
    y_star.style.width = score / 5 * 100 + "%";
}


//实现评论面板 点击评论按钮后，获得评价（分数和内容）
let submit = document.getElementsByClassName("submit")[0];
let content = document.getElementsByClassName("comment-content")[0];
submit.onclick = function () {
    // 获取分数及评论内容
    console.log("分数：", score)
    let content_v = content.value ;
    console.log("评论内容：", content_v)
    // 调用网络接口，上传分数及评论内容至服务器

}