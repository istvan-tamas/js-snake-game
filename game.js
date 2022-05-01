// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startInterval);

let cnvs = document.querySelector("#gameBoard"); 

// start the game engine with 5 sec tick
function startInterval(){
    function startGame() {
        generateRandomPickUp();
        setTimeout(function() {
            startGame();
        }, 5000);
    }
    startGame();
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
    console.log(random_xPos);
    console.log(random_xPos);
    ctx.stroke();

}

// TODO figure out player movement
// the player starts at the center
function playerStart(){
    // place the player in the center
    let start_xPos = 8 * 25;
    let start_yPos = 8 * 25;
    let ctx = cnvs.getContext("2d");
    ctx.beginPath();
    // 10x10 square fits into one space of the grid
    ctx.rect(start_xPos, start_yPos, 10,10);
    ctx.stroke();

}

playerStart();


// player movement




// drawing a game board with grid
let ctx = cnvs.getContext("2d");

// Box width
let bw = 400;
// Box height
let bh = 400;
// Padding
let p = 5;

// 25x25 grid
function drawBoard(){
    // horizontal lines
    for (let x = 0; x <= bw; x += 16) {
        ctx.moveTo(0.01 + x + p, p);
        ctx.lineTo(0.01 + x + p, bh + p);
    }

    // vertical lines
    for (let x = 0; x <= bh; x += 16) {
        ctx.moveTo(p, 0.01 + x + p);
        ctx.lineTo(bw + p, 0.01 + x + p);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
}

drawBoard();

