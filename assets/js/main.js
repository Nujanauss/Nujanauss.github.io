window.addEventListener("beforeunload", function(e) {
    document.body.className = "page-loading";
}, false);

window.onscroll = function(ev) {
  var styleElem = document.head.appendChild(document.createElement("style"));
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".site-title").style.fontSize = "24px";
    styleElem.innerHTML = ".site-title::before { height: 32px; width: 32px; }";
  } else {
    document.querySelector(".site-title").style.fontSize = "28px";
    styleElem.innerHTML = ".site-title::before { height: 36px; width: 36px; }";
  }
};