// variable setup for the game
let cnvs = document.querySelector("#gameBoard");
let playerStartPos_x = 8 * 25;
let playerStartPos_y = 8 * 25;
let bh = 400;
let bw = 400;
let player = "";

// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startGame);
//document.querySelector("#restart").addEventListener("click", restartGame);
//document.querySelector("#pause").addEventListener("click", pauseGame);
//document.querySelector("#resume").addEventListener("click", resumeGame);


// start the game engine with 5 sec tick
function startGame(){
        setInterval(function() {movePlayer();}, 1000);
        //setInterval(function() {generateRandomPickUp()},5000);
}

// random int generator for positioning
function getRandomInt(min_arg, max_arg) {
    let min = Math.ceil(min_arg);
    let max = Math.floor(max_arg);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


// random pickup generation
function generateRandomPickUp(){
    let ctx = cnvs.getContext("2d");
    // generate a random number between 1-25 (size of the field)
    let random_xPos = getRandomInt(1,25);
    let random_yPos = getRandomInt(1,25);
    ctx.beginPath();

    // to place random powerup add multiples of 16 (1 box is 16x16 pixels - 3 pixels to center)
    ctx.arc(16 * random_xPos - 3, 16 * random_yPos - 3, 5, 0, 2 * Math.PI);
    ctx.stroke();

}

// the player starts at the center
function playerStart(){
    player = cnvs.getContext("2d");
    player.beginPath();
    // 10x10 square fits into one space of the grid
    player.rect(playerStartPos_x, playerStartPos_y, 10,10);
    player.stroke();
    player.closePath();
}

playerStart();


// TODO figure out player movement
function movePlayer(){
    player.clearRect(0, 0, bw, bh);
    player.beginPath();
    player.rect(playerStartPos_x, playerStartPos_y, 10,10);
    player.closePath();
    console.log(playerStartPos_x);
    console.log(playerStartPos_y);
    playerStartPos_x -= 0;
    playerStartPos_y -= -16;
   // player.transform(0, 0, 0, 0, playerStartPos_x, playerStartPos_y);
}

