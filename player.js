let playerDisplay = 0;
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 4;
  }
  display() {
    image(playerImgList[playerDisplay], this.x, this.y, cellHeight, cellHeight);
  }
  move() {

    this.currentX = floor(((this.x + this.dx) - widthBuffer) / cellWidth);
    this.currentY = floor((this.y + this.dx) / cellHeight);

    if (this.withinBorder() && grid[this.currentY][this.currentX] !== 1) {
      if (keyIsDown(87)) { //w
        this.y += -this.dx;
        playerDisplay = 1;
      }
      if (keyIsDown(83)) { //s
        this.y += this.dx;
        playerDisplay = 0;
      }

      if (keyIsDown(68)) { //d
        this.x += this.dx;
        playerDisplay = 2;
      }

      if (keyIsDown(65)) { //a
        this.x += -this.dx;
        playerDisplay = 3;
      }
    }

    else { // bump back
      if (this.y <= 0) {
        this.y += 1;
      }
      else if (this.y >= height - cellWidth) {
        this.y -= 1;
      }
      else if (this.x <= widthBuffer) {
        this.x += 1;
      }
      else {
        water.play();
        this.x = widthBuffer;
        this.y = 0;
      }

    }

  }

  withinBorder() {
    return this.y >= 0 && this.y + cellHeight / 2 <= height && this.x >= widthBuffer && this.x <= width - widthBuffer;
  }

}

