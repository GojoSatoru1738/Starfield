export class Star {


    x = 50;
    y = 50;
    pencil;

    constructor(pencil) {
        this.pencil = pencil;
    }

    draw(pencil) {
        this.pencil.beginPath();
        this.pencil.arc(95, 50, 40, 0, 2 * Math.PI);
        this.pencil.fillStyle = "red";
        this.pencil.fill();
        this.pencil.closePath();
    }

}