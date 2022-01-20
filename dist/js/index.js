window.addEventListener('load', function () {
    /*
        A NodeList of all your image containers (Or a single Node).
        The library will locate an <img /> within each
        container to create the gradient from.
     */
    Grade(document.querySelectorAll('.lb-bgc'))
})
lunbotu();
login_register();

//轮播图
function lunbotu() {
    let currentIndex = 0
    let titles = document.querySelectorAll(".like-lb>.titles>li")
    let images = document.querySelectorAll(".like-lb>.images>li")

    titles.forEach((title, index) => {
        title.onmouseover = function () {
            titles[currentIndex].className = ""
            images[currentIndex].className = ""

            title.className = "current"
            images[index].className = "current"

            currentIndex = index
        }
    })
}

// 点 X 时隐藏注册登录面板
function hideMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask"
}

// 点 user 区时显示注册登录面板
function showMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask show"
}

// 切换登录、注册面板
function login_register() {
    let currentIndex2 = 0;
    let tabs = document.querySelectorAll(".lr-pane .tabs li");
    let panes = document.querySelectorAll(".lr-pane .panes li");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function () {
            tabs[currentIndex2].className = "";
            tabs[i].className = "current";
            panes[currentIndex2].className = "";
            panes[i].className = "current";
            currentIndex2 = i;
        }
    }
}