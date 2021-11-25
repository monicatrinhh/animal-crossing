let defaultPlayer;


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
  }
  display(){
    image(playerImg, this.x, this.y, cellWidth, cellWidth);
  }
}

function displayPlayer(){
  
  thePlayer.display();
}