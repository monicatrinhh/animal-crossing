// Major Project - Animal Crossing Clone
// Monica Trinh
// November 16th, 2021

let grid;
let gridSize = 20;
let cellWidth; let cellHeight;
let widthBuffer;
let grass; let grassPale;
let playerImg;
let gridDimensions;
let defaultPlayer;


function preload() {
  grass = loadImage("assets/background/grass.png");
  grassPale = loadImage("assets/background/grass2.jpg");
  playerImg = loadImage("assets/player/male.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  widthBuffer = width / 8;
  grid = createEmptyArray(gridSize, gridSize);
  cellWidth = (width - 2 * widthBuffer) / gridSize;
  cellHeight = height / gridSize;
  defaultPlayer = new Player(widthBuffer, 0);
}

function draw() {
  background("#2acaea");
  displayGrid();
  defaultPlayer.move();
  defaultPlayer.display();

}


