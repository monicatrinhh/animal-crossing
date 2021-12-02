class Bell {
    constructor() {
        this.x = cellWidth / 6;
        this.y = cellHeight / 6;
    }
    display() {
        image(bellImg, this.x, this.y, cellWidth, cellWidth);
    }
}

function bellCurrency() {
    bell.display();
}