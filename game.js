// variable setup for the game
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

// starting point for the player
const _startX = cnvs.clientWidth / 2;
const _startY = cnvs.clientHeight / 2;

// setting up the player
let player = {
    score : 0,
    length : 6
}



ctx.beginPath();
ctx.rect(_startX,_startY,player.length * 10,10);
ctx.stroke();



// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startGame);

function startGame(){
    console.log("Game started");
}