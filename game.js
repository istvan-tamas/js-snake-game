// variable setup for the game
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

// starting point for the player
let _startX = cnvs.width / 2;
let _startY = cnvs.height / 2;

// setting up the player
let player = {
    score : 0,
    length : 6,
    moveSpeed : 10,
    x : _startX,
    y : _startY,
    direction : "UP"
}

// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startGame);

function startGame(){
    playerMove = setInterval(movePlayer, 250);
}


function movePlayer(){

    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.beginPath();
    ctx.rect(player.x,player.y,player.length * 10,10);
    ctx.stroke();
    ctx.closePath();
    // moving to the right
    player.x += player.moveSpeed;

    // check if snake touches the edge
    if(player.x + player.length * 10 >= cnvs.width){
        clearInterval(playerMove);
    }

}

// game controls
document.addEventListener("keydown", changeDirection);
function checkDirection(){
    if (player.direction === "UP") {
        player.y += player.moveSpeed;

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

