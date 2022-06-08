// variable setup for the game board
let cnvs = document.querySelector("#gameBoard");
let ctx = cnvs.getContext("2d");

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


// after setting up the initial coordinates drawing the snake in the middle of the board
function drawSnakePart(snakePart) { 
    ctx.fillStyle = 'white';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

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
        snake.push({x:10, y:10});
        food = true;
    }
    ctx.beginPath();
    // to place random powerup add multiples of 16 (1 box is 16x16 pixels)
    ctx.arc(foodX,foodY,3, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(foodX, foodY);


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
    if(snake[0].x >= cnvs.width + 10){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }else if(snake[0].x <= 0 - 20){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }else if(snake[0].y <= 0 - 20){
        clearInterval(game);
        clearInterval(food);
        alert("Game Over!");
    }
    else if(snake[0].y >= cnvs.height + 10){
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

// Event listeners for the buttons
document.querySelector("#start").addEventListener("click", startGame);


function startGame(){
    console.log("game started");
    game = setInterval(function game(){drawSnake();changeSnake();edgeTest();},100);
    food = setInterval(function food(){generateRandomfood();},1000);
}



