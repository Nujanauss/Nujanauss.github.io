window.addEventListener("beforeunload", function(e) {
    document.body.className = "page-loading";
}, false);

window.onscroll = function(ev) {
  var styleElem = document.head.appendChild(document.createElement("style"));
  var im = document.querySelector(".site-title-image").style;
  var he = document.querySelector(".site-header").style;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".site-title").style.fontSize = "24px";
    im.height = "32px";
    im.width = "32px";
    he.boxShadow = "none";
    he.background = "linear-gradient(180deg, rgba(252, 252, 252, 1) 0%, rgba(252, 252, 252, 0.6) 70%, rgba(252, 252, 252, 0.4) 85%, rgba(252, 252, 252, 0.2) 93%, rgba(252, 252, 252, 0) 100%)";
  } else {
    document.querySelector(".site-title").style.fontSize = "28px";
    im.height = "36px";
    im.width = "36px";
    he.boxShadow = "0px 0px 10px grey";
    he.background = "radial-gradient(circle, rgba(252, 252, 252, 1) 80%, rgba(235, 235, 235, 1) 100%)";
  }
};