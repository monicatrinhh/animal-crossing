
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

    if (this.y >= 0 && this.y <= height && this.x >= widthBuffer && this.x <= width - widthBuffer) {
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
      this.currentX = ceil((this.x - widthBuffer) / cellWidth);
      this.currentY = ceil(this.y / cellHeight);
    }
    else { // bump back
      if (this.x <= widthBuffer) {
        this.x += 1;
      }
      else if (this.x >= width - widthBuffer) {
        this.x -= cellWidth;
      }
      else if (this.y + cellWidth >= height) {
        this.y = height - cellWidth;
      }
      else if (this.y <= 0) {
        this.y = width - widthBuffer;
      }
    }
  }


}

