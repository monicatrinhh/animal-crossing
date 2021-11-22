// Major Project - Animal Crossing Clone
// Monica Trinh
// November 16th, 2021

let grid;
let gridSize = 20;
let cellWidth; let cellHeight;
let widthBuffer; let heightBuffer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  widthBuffer = width/5;
  heightBuffer = height/10;
  grid = createEmptyArray(gridSize,gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y=buffer; y<gridSize; y++) {
    for (let x=buffer; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function createEmptyArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}