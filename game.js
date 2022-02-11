// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startInterval);

let cnvs = document.querySelector("#gameBoard"); 

// start the game engine with 3 sec tick
function startInterval(){
    function startGame() {
        generateRandomPickUp();
        setTimeout(function() {
            startGame();
        }, 3000);
    }
    startGame();
}

// random int generator for positioning
function getRandomInt(min, max) {
    let min = Math.ceil(min);
    let max = Math.floor(max);
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

// TODO -> randomize first pickup
function generateFirstPickup(){
    let start_xPos = 13;
    let start_yPos = 13;
    let ctx = cnvs.getContext("2d");
    ctx.beginPath();
    ctx.arc(start_xPos, start_yPos, 5, 0, 2 * Math.PI);
    ctx.stroke();

}

generateFirstPickup();


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
        ctx.moveTo(0.20 + x + p, p);
        ctx.lineTo(0.20 + x + p, bh + p);
    }

    // vertical lines
    for (let x = 0; x <= bh; x += 16) {
        ctx.moveTo(p, 0.20 + x + p);
        ctx.lineTo(bw + p, 0.20 + x + p);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
}

drawBoard();

