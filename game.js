// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startInterval);

//let canvas = document.querySelector("#gameBoard");

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
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.stroke();
}

var canvas = document.getElementById("gameBoard");
var context = canvas.getContext("2d");


// drawing a game board with grid

// Box width
let bw = 800;
// Box height
let bh = 800;
// Padding
let p = 5;

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.20 + x + p, p);
        context.lineTo(0.20 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.20 + x + p);
        context.lineTo(bw + p, 0.20 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();

