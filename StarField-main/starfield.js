let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); 

import { Star } from "star.js";
let mySpecialStar = new Star();
mySpecialStar.draw();



function gameLoop() {

    //draw backround
    //draw stars
    //move stars
    //recycle stars


}

setInterval(gameLoop, 10);
