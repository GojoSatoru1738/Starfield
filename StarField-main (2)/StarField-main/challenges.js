import { Star } from "./star.js";

const canvas = document.getElementById("myCanvas");
const pencil = canvas.getContext("2d");

const numStars = 500;
const stars = [];


for (let i = 0; i < numStars; i++) {
  stars.push(new Star(canvas, pencil));
}

function gameLoop() {

  pencil.fillStyle = "black";
  pencil.fillRect(0, 0, canvas.width, canvas.height);

 
  for (let star of stars) {
    star.update(100); 
    star.draw();
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
