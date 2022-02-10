// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startInterval);

let cnvs = document.querySelector("#gameBoard"); 



function startInterval(){
    function startGame() {
        renderGame();
        setTimeout(function() {
            startGame();
        }, 500);
    }
    startGame();
}

function renderGame(){
    let x = Math.random() * 200;
    let y = Math.random() * 200;
    let ctx = cnvs.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.stroke();
}




// random pickup generation

function generatePickUp(){
    
    // set random values for positions
    let xPos = Math.floor(Math.random() * 400 + 1);
    let yPos = Math.floor(Math.random() * 400 + 1);
    let ctx = cnvs.getContext("2d");
    ctx.beginPath();
    ctx.arc(xPos, yPos, 5, 0, 2 * Math.PI);
    ctx.stroke();

    console.log(xPos);
    console.log(yPos);
}

// testing stuff

generatePickUp();

// drawing a game board with grid
let ctx = cnvs.getContext("2d");

// Box width
let bw = 400;
// Box height
let bh = 400;
// Padding
let p = 5;

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

