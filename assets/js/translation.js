window.addEventListener("beforeunload", function(e) {
    document.body.className = "page-loading";
}, false);

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

async function rotate(first) {
  await new Promise(r => setTimeout(r, 200));;
  first.innerHTML = "hard";

  await new Promise(r => setTimeout(r, 200));;
  first.innerHTML = "har";

  await new Promise(r => setTimeout(r, 200));;
  first.innerHTML = "ha";

  await new Promise(r => setTimeout(r, 200));;
  first.innerHTML = "h";

  await new Promise(r => setTimeout(r, 200));;
  first.innerHTML = '';

  await new Promise(r => setTimeout(r, 200));;

  var elements = document.getElementsByClassName('txt-rotate');
  var toRotate = elements[0].getAttribute('data-rotate');
  var period = elements[0].getAttribute('data-period');
  if (toRotate) {
    new TxtRotate(elements[0], JSON.parse(toRotate), period);
  }
}

window.addEventListener("load", function() {
  window.onscroll = function(ev) {
  document.head.appendChild(document.createElement("style"));
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

    var windowBottom = window.scrollY + window.innerHeight;
    document.querySelectorAll(".testimonial").forEach(testimonial => {
      /* Check the location of each desired element */
      var rect = testimonial.getBoundingClientRect();
      var objectBottom = rect.bottom + 100; //some magic fucking number to get this to work

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          testimonial.classList.add("show");
          testimonial.classList.remove("hide");
      } else { //object goes out of view (scrolling up
          testimonial.classList.add("hide");
          testimonial.classList.remove("show");
      }
    });
  };

  rotate(document.getElementById('hide-with-js'));
});