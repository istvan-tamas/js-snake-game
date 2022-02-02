// Event listeners for the controls
document.querySelector("#start").addEventListener("click", startInterval);

let canvas = document.querySelector("#gameBoard");

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

