export class Star {

    x = 50;
    y = 50;

    draw() {

        let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); 
        ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
        ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    }


}