// bugfixes needed TODO
// The edge collision testing does not working -> the y top collision happens much earlier
// The snake can turn on itself
// Food can be generated on the snake itself
// Restarting the game is not implemented

// game board setup
let cnvs = document.querySelector('#gameBoard');
let ctx = cnvs.getContext('2d');

let scoreHandle = document.querySelector('#score');
let score = 0;

console.log(cnvs.height);

console.log(cnvs.width);

// snake setup
let startX = ctx.canvas.width / 2;
let startY = ctx.canvas.height / 2;

// movement starts to the right
let dx = 10;
let dy = 0;

// snake startpoint setup
let snake = [
	{ x: startX, y: startY },
	{ x: startX - 10, y: startY },
	{ x: startX - 20, y: startY },
	{ x: startX - 30, y: startY },
];

function drawSnake(snake) {
	ctx.clearRect(0, 0, cnvs.width, cnvs.height);
	snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
	ctx.fillStyle = '#A020F0';
	ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
	ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

drawSnake(snake);

// game controls
document.querySelector('#start').addEventListener('click', startGame);
document.querySelector('#restart').addEventListener('click', restartGame);
document.querySelector('#pause').addEventListener('click', pauseGame);
document.querySelector('#resume').addEventListener('click', resumeGame);

let paused = true;

function startGame() {
	paused = false;
}

function restartGame() {
	paused = false;
}

function pauseGame() {
	paused = true;
}

function resumeGame() {
	paused = false;
}
