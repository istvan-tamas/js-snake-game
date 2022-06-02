// variable setup for the game board
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

//starting transformations
let dx = 10;
let dy = 0;

// starting point for the player
let startX = cnvs.width / 2;
let startY = cnvs.height / 2;

// snake startpoint set-up
let snake = [{x:startX, y:startY},{x:startX - 10, y:startY},{x:startX - 20, y:startY},{x:startX - 30, y:startY}];


// after setting up the initial coordinates drawing the snake in the middle of the board
function drawSnakePart(snakePart) { 
    ctx.fillStyle = 'white';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() { 
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    snake.forEach(drawSnakePart);
}

function changeSnake(){
    const head = {
        x:snake[0].x + dx, y: snake[0].y + dy
    };
    snake.unshift(head);
    snake.pop();
}

// game controls
document.addEventListener("keydown", changeDirection);

function changeDirection(e){
    if(e.key === "ArrowUp"){
        dy = -10;
        dx = 0;
    }
    else if(e.key === "ArrowDown"){
        dy = 10;
        dx = 0;
    }
    else if(e.key === "ArrowRight"){
        dy = 0;
        dx = 10;
    }
    else if(e.key === "ArrowLeft"){
        dy = 0;
        dx = -10;
    }
}

// collision testing
function edgeTest(){
    if(snake[0].x >= cnvs.width){
        clearInterval(game);
        alert("You loose!");
    }
}


// Event listeners for the buttons
document.querySelector("#start").addEventListener("click", startGame);


function startGame(){
    console.log("game started");
    game = setInterval(function game(){drawSnake();changeSnake();edgeTest();},200);
}

console.log(cnvs.width);