// Major Project - Animal Crossing Clone
// Monica Trinh
// November 16th, 2021

let grid;
let gridSize = 20;
let cellWidth; let cellHeight;
let widthBuffer;
let grass; let grassPale;
let playerImgList, playerFront, playerBack, playerLeft, playerRight;
let gridDimensions;
let defaultPlayer;
let water;


function preload() {
  grass = loadImage("assets/background/grass.png");
  grassPale = loadImage("assets/background/grass2.jpg");
  playerFront = loadImage("assets/player/male.png");
  playerBack = loadImage("assets/player/maleBack.png");
  playerRight = loadImage("assets/player/maleRight.jpg");
  playerLeft = loadImage("assets/player/maleLeft.jpg");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  water = loadSound('assets/sound/waterSplash.wav');
  widthBuffer = width / 8;
  grid = createEmptyArray(gridSize, gridSize);
  cellWidth = (width - 2 * widthBuffer) / gridSize;
  cellHeight = height / gridSize;
  gridDimensions = cellWidth * gridSize;
  defaultPlayer = new Player(widthBuffer, 0);

  playerImgList = [playerFront, playerBack, playerRight, playerLeft];
}

function draw() {
  background("#2acaea");
  displayGrid();
  defaultPlayer.move();
  defaultPlayer.display();

}


