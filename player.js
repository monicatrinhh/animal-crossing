
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
  }
  display() {
    image(playerImg, this.x, this.y, cellHeight, cellHeight);
  }
  move() {

    this.currentX = floor(((this.x + this.dx) - widthBuffer) / cellWidth);
    this.currentY = floor((this.y + this.dx) / cellHeight);

    if (this.withinBorder()) {
      if (keyIsDown(87)) { //w
        // this.currentY = floor(((this.x + this.dx) - widthBuffer) / cellWidth);
        if (grid[this.currentY][this.currentX] !== 1) {
          this.y += -this.dx;
        }

      }

      if (keyIsDown(83) && grid[this.currentY][this.currentX] !== 1) { //s
        // this.currentY = ceil(((this.x + this.dx) - widthBuffer) / cellWidth);
        this.y += this.dx;
      }

      if (keyIsDown(68) && grid[this.currentY][this.currentX] !== 1) { //d
        this.x += this.dx;
      }

      if (keyIsDown(65) && grid[this.currentY][this.currentX] !== 1) { //a
        // this.currentX = floor(((this.x + this.dx) - widthBuffer) / cellWidth);
        this.x += -this.dx;
      }

    }
    else { // bump back
      this.x = widthBuffer;
      this.y = 0;
    }
  }
  withinBorder() {
    return this.y >= 0 && this.y + cellHeight / 2 <= height && this.x >= widthBuffer && this.x <= width - widthBuffer;
  }

}

