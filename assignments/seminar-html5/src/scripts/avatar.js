var myGamePiece;

function start() {

    myGamePiece = new component(300, 300, "images/agateemieliD.gif", (screen.width / 5), (screen.height / 2), "image");
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = screen.width;
        this.canvas.height = screen.height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function(e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function(e) {
            myGameArea.key = false;
        })
    },
    clear: function() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {	

        myGamePiece.image.src = "images/agateemieliE.gif";
        myGamePiece.speedX = -1;
    }
    if (myGameArea.key && myGameArea.key == 39) {
        myGamePiece.image.src = "images/agateemieliD.gif";
        myGamePiece.speedX = 1;
    }
   /* if (myGameArea.key && myGameArea.key == 38) {
        myGamePiece.speedY = -1;
    }
    if (myGameArea.key && myGameArea.key == 40) {
        myGamePiece.speedY = 1;
    }*/
    myGamePiece.newPos();
    myGamePiece.update();
}