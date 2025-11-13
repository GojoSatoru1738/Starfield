export class Star {
  constructor(canvas, pencil) {
    this.canvas = canvas;
    this.pencil = pencil;
    this.reset();
  }

  reset() {
   
    this.x = (Math.random() - 0.5) * this.canvas.width;
    this.y = (Math.random() - 0.5) * this.canvas.height;
    this.z = Math.random() * this.canvas.width; 
  }

  update(speed) {
    this.z -= speed;
    if (this.z <= 0) {
      this.reset(); // Recycle star when it passes the viewer
      this.z = this.canvas.width;
    }
  }

  draw() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;


    const scale = 200 / this.z;
    const x = this.x * scale + cx;
    const y = this.y * scale + cy;
    const radius = Math.max(0, 1.5 * (1 - this.z / this.canvas.width));


    if (x < 0 || x > this.canvas.width || y < 0 || y > this.canvas.height) {
      this.reset();
      return;
    }

    const brightness = Math.min(255, 255 - (this.z / this.canvas.width) * 255);
    this.pencil.fillStyle = `rgb(${brightness},${brightness},${brightness})`;

    this.pencil.beginPath();
    this.pencil.arc(x, y, radius, 0, 2 * Math.PI);
    this.pencil.fill();
  }
}

