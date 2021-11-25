// Major Project - Animal Crossing Clone
// Monica Trinh
// November 16th, 2021

let grid;
let gridSize = 25;
let cellWidth; let cellHeight;
let widthBuffer;
let grass; let grassPale; 
let playerImg; 
let gridDimensions;


function preload(){
  grass = loadImage("assets/background/grass.png"); 
  grassPale = loadImage("assets/background/grass2.jpg");  
  playerImg = loadImage("assets/player/playerMale.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  widthBuffer = width/8;
  grid = createEmptyArray(gridSize,gridSize);
  cellWidth = (width-2*widthBuffer)/gridSize  ;
  cellHeight = height/gridSize ;
 
}

function draw() {
  background("#2acaea");
  displayGrid();
  displayPlayer();
}

function displayGrid() {
  for (let y= 0; y<gridSize; y++) {
    for (let x = 0; x<gridSize; x++) {
      noStroke();
      rect(x*cellWidth+ widthBuffer, y*cellHeight, cellWidth, cellHeight);
      if (grid[y][x] === 0) {
        image(grassPale,x*cellWidth+ widthBuffer, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        fill("#2acaea");
      }
      else if (grid[y][x] === 2) {
        image(grass,x*cellWidth+ widthBuffer, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}


function createEmptyArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 20) {
        board[y].push(1); // river
      }
      else if (random(100) < 50) {
        board[y].push(2); // dark green
      }
      else {
        board[y].push(0); // pale green
      }
    }
  }
  return board;
}

