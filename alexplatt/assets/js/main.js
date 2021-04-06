window.addEventListener("beforeunload", function(e) {
    document.body.className = "page-loading";
}, false);

window.onscroll = function(ev) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".site-title").style.fontSize = "22px";
    } else {
    document.querySelector(".site-title").style.fontSize = "26px";
    }
};