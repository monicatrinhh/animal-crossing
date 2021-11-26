let inGrid = true;


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
    if (inGrid) {
      if (keyIsDown(87)) { //w
        this.y += -this.dx;
      }
      if (keyIsDown(83)) { //s
        this.y += this.dx;
      }
      if (keyIsDown(68)) { //s
        this.x += this.dx;
      }
      if (keyIsDown(65)) { //s
        this.x += -this.dx;
      }
    }

  }

  insideGrid() {
    if (this.y > 0 && this.y < height) {
      return inGrid = true;
    }
  }
}

