// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Draw a simple moving square
let x = 10;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 100, 50, 50);
  x += 2;
  if (x > canvas.width) x = 0;
  requestAnimationFrame(draw);
}
draw();
