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

// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startGame);

function startGame(){
    //playerMove = setInterval(movePlayer, 250);
    playerRedraw = setInterval(playerDraw,250);
}



function playerDraw(){
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.beginPath();
    ctx.rect(player.x + player.moveSpeed,player.y,10,10);
    ctx.stroke();
    ctx.closePath();
    player.moveSpeed += 10;

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