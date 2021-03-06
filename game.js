// variable setup for the game board
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

let scoreHandle = document.querySelector("#score");
let score = 0;

// Box width
let bw = 400;
// Box height
let bh = 400;
// Padding
let p = 0;

//starting transformations
let dx = 10;
let dy = 0;

// starting point for the player
let startX = cnvs.width / 2;
let startY = cnvs.height / 2;

let food = true;
let foodX;
let foodY;

// snake startpoint set-up
let snake = [{x:startX, y:startY},{x:startX - 10, y:startY},{x:startX - 20, y:startY},{x:startX - 30, y:startY}];

function drawSnake() { 
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    snake.forEach(drawSnakePart);
    // draw food
    if(food) {
        foodX = (getRandomInt(1,4) * getRandomInt(1,10) * 10) - 10;
        foodY = (getRandomInt(1,4) * getRandomInt(1,10) * 10) - 10;
        food = false;
    }
    if (foodX === snake[0].x && foodY === snake[0].y) {
        score += 1;
        snake.push({x:10, y:10});
        food = true;
        scoreHandle.innerHTML = score;
    }
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
    ctx.stroke();
}

function changeSnake(){
    const head = {
        x:snake[0].x + dx, y: snake[0].y + dy
    };
    snake.unshift(head);
    snake.pop();
}

// after setting up the initial coordinates drawing the snake in the middle of the board
function drawSnakePart(snakePart) { 
    ctx.fillStyle = '#112A46';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// game controls
document.addEventListener("keydown", changeDirection);

function changeDirection(e){
    e.preventDefault();
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
    if(snake[0].x > cnvs.width){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }else if(snake[0].x < -10){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }else if(snake[0].y == 0 ){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }
    else if(snake[0].y > cnvs.height - 10){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }
}

// random number generator for food pickup

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// generating food

function generateRandomfood(){

}

// creating the grid
function drawBoard(){
    for (var x = 0; x <= bw; x += 10) {
        ctx.moveTo(0.20 + x + p, p);
        ctx.lineTo(0.20 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 10) {
        ctx.moveTo(p, 0.20 + x + p);
        ctx.lineTo(bw + p, 0.20 + x + p);
    }
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
}

// Event listeners for the buttons
document.querySelector("#start").addEventListener("click", startGame);


function startGame(){
    console.log("game started");
    game = setInterval(function game(){edgeTest();drawSnake();changeSnake();drawBoard()},100);
    food = setInterval(function food(){generateRandomfood();},1000);
}


drawBoard();

console.log(cnvs.width);
console.log(cnvs.height);