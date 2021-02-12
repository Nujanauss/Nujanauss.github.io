const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

class Particle {
 constructor(x, y, directionX, directionY, size, color) {
   this.x = x;
   this.y = y;
   this.directionX = directionX;
   this.directionY = directionY;
   this.size = size;
   this.color = color;
 }

 draw() {
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
   ctx.fillStyle = "#7E7E82";
   ctx.fill();
 }

 update() {
   if (this.x > canvas.width || this.x < this.size) {
        this.directionX = -this.directionX;
   }
   if (this.y > canvas.height || this.y < this.size) {
        this.directionY = -this.directionY;
   }

   this.x += this.directionX;
   this.y += this.directionY;
   this.draw();
 }
}

function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = "#7E7E82";

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

window.addEventListener("resize",
  function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

init();
animate();