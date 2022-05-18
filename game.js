// variable setup for the game
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

// starting point for the player
let _startX = cnvs.width / 2;
let _startY = cnvs.height / 2;

// setting up the player
let player = {
    score : 0,
    length : 4,
    moveSpeed : 10,
    x : _startX,
    y : _startY,
    direction : "UP"
}


// snake set-up
let snake_coords = []
for (let index = 0; index < player.length; index++) {
    snake_coords.push({x:_startX + index * 10, y:_startY});
}

// after setting up the initial coordinates drawing the snake
function drawSnakePart(snakePart) {  
    ctx.fillStyle = 'lightgreen';  
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() { 
    snake_coords.forEach(drawSnakePart);
}

drawSnake();


// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startGame);

function startGame(){
    //playerMove = setInterval(movePlayer, 250);
    playerRedraw = setInterval(playerDraw,400);
}

function playerDraw(){
    if (player.direction === "UP") {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        ctx.beginPath();
        ctx.rect(player.x,player.y - 16,10,10*player.length);
        ctx.stroke();
        ctx.closePath();
        player.y -= 16;
    }
    if (player.direction === "DOWN") {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        ctx.beginPath();
        ctx.rect(player.x,player.y + 16 ,10,10);
        ctx.stroke();
        ctx.closePath();
        player.y += 16;
    }
    if (player.direction === "RIGHT") {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        ctx.beginPath();
        ctx.rect(player.x + 16,player.y,10,10);
        ctx.stroke();
        ctx.closePath();
        player.x += 16;
    }
        if (player.direction === "LEFT") {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        ctx.beginPath();
        ctx.rect(player.x - 16,player.y,10,10);
        ctx.stroke();
        ctx.closePath();
        player.x -= 16;
    }
 

}


function movePlayer(){
    checkDirection();
    drawPlayer();
    if(player.x + player.length * 10 >= cnvs.width){
        clearInterval(playerMove);
    }

}

// game controls
document.addEventListener("keydown", changeDirection);
function checkDirection(){
    if (player.direction === "UP") {
        player.y -= player.moveSpeed;
        player.x -= 0;
    }
    if (player.direction === "DOWN") {
        player.y += player.moveSpeed;
        player.x +=0;
    }
    if (player.direction === "RIGHT") {
        player.x += player.moveSpeed;
        player.y += 0; 
    }
    if (player.direction === "LEFT") {
        player.x -= player.moveSpeed;
        player.y +=0;
    }
}

// controls
function changeDirection(e){
    if(e.key === "ArrowUp"){
        player.direction = "UP";
    }
    else if(e.key === "ArrowDown"){
        player.direction = "DOWN";
    }
    else if(e.key === "ArrowRight"){
        player.direction = "RIGHT";
    }
    else if(e.key === "ArrowLeft"){
        player.direction = "LEFT";
    }
}

  

function drawPlayer(){
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    if (player.direction === "UP") {
    for (let index = 0; index < player.length; index++) {  
            ctx.beginPath();
            ctx.rect(player.x,player.y + 16 ,10,10 + index * 10);
            ctx.stroke();
            ctx.closePath();
        }
    }
    if (player.direction === "DOWN") {
    for (let index = 0; index < player.length; index++) {  
            ctx.beginPath();
            ctx.rect(player.x,player.y - 16 ,10,10 + index * 10);
            ctx.stroke();
            ctx.closePath();
        }
    }
    if (player.direction === "RIGHT" || player.direction === "LEFT") {
    for (let index = 0; index < player.length; index++) {  
            ctx.beginPath();
            ctx.rect(player.x,player.y,10 + index * 10,10);
            ctx.stroke();
            ctx.closePath();
        }
    }

}