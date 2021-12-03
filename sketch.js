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
let blathers, isabelle, kk, tomNook;
let bellImg, coin;
let bell;
let fishImg, fishFunction;
let shopImg, theShop;
let camera;

function preload() {
  grass = loadImage("assets/background/grass.png");
  grassPale = loadImage("assets/background/grass2.jpg");

  // currency and functions
  bellImg = loadImage("assets/currency/BellBag.png");
  coin = loadImage("assets/currency/BellCoin.png");
  fishImg = loadImage("assets/currency/fish.png");
  shopImg = loadImage("assets/spaces/shop.png");

  // player
  playerFront = loadImage("assets/player/male.png");
  playerBack = loadImage("assets/player/maleBack.png");
  playerRight = loadImage("assets/player/maleRight.png");
  playerLeft = loadImage("assets/player/maleLeft.png");


  water = loadSound('assets/sound/waterSplash.wav');

  // villagers
  blathers = loadImage("assets/villagers/blathers.png");
  isabelle = loadImage("assets/villagers/isabelle.png");
  kk = loadImage("assets/villagers/KK.png");
  tomNook = loadImage("assets/villagers/tomNook.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  widthBuffer = width / 8;
  grid = createEmptyArray(gridSize, gridSize);
  cellWidth = (width - 2 * widthBuffer) / gridSize;
  cellHeight = height / gridSize;
  gridDimensions = cellWidth * gridSize;

  defaultPlayer = new Player(widthBuffer, 0);
  bell = new Bell();
  fishFunction = new Fish();
  theShop = new Shop();
  playerImgList = [playerFront, playerBack, playerRight, playerLeft];
  // camera = createCamera();
}

function draw() {
  background("#2acaea");
  // camera(defaultPlayer.x / 1000, defaultPlayer.y / 1000, 1000);
  displayGrid();
  defaultPlayer.move();
  defaultPlayer.display();

  bellCurrency();

  fishDisplay();

  shopDisplay();
}


