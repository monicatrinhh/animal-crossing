// Major Project - Animal Crossing Clone
// Monica Trinh
// November 16th, 2021

let grid;
let gridSize = 20;
let cellWidth; let cellHeight;
let widthBuffer; let heightBuffer;
let grass; 

function preload(){
  // grass = loadImage("assets/background/grass.png");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  widthBuffer = width/6;
  heightBuffer = height/6;
  grid = createEmptyArray(gridSize,gridSize);
  cellWidth = (width-2*widthBuffer)/gridSize  ;
  cellHeight = (height- 2*heightBuffer)/gridSize ;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y= 0; y<gridSize; y++) {
    for (let x = 0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth+ widthBuffer, y*cellHeight + heightBuffer, cellWidth, cellHeight);
    }
  }
}


function createEmptyArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 25) {
        board[y].push(1);
      }
      else {
        board[y].push(0);
      }
    }
  }
  return board;
}