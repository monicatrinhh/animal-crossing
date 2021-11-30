
// make the character display a variable so you can toggle between male and female

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 3;

  }
  display() {
    image(playerImg, this.x, this.y, cellHeight, cellHeight);
  }
  move() {
    this.currentX = floor((this.x - widthBuffer) / cellWidth);
    this.currentY = floor(this.y / cellHeight);

    if (this.y >= 0 && this.y <= height && this.x >= widthBuffer && this.x <= width - widthBuffer && grid[this.currentY][this.currentX] !== 1) {
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
      else if (grid[this.currentY][this.currentX] === 1) {
        this.x = widthBuffer;
        this.y = 0;
      }
    }
  }


}

