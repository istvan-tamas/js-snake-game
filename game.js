// bugfixes needed TODO
// The edge collision testing does not working -> the y top collision happens much earlier
// The snake can turn on itself
// Food can be generated on the snake itself
// Restarting the game is not implemented

// variable setup for the game board
let cnvs = document.querySelector('#gameBoard');
let ctx = cnvs.getContext('2d');

let scoreHandle = document.querySelector('#score');
let score = 0;

// creating the game grid
let bw = 400;
let bh = 400;

function drawBoard() {
	for (let x = 0; x <= bw; x += 10) {
		ctx.moveTo(x);
		ctx.lineTo(x, bh);
	}

	for (let x = 0; x <= bh; x += 10) {
		ctx.moveTo(x);
		ctx.lineTo(bw, x);
	}
	ctx.stroke();
}

// player setup
let startX = cnvs.width / 2;
let startY = cnvs.height / 2;

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

// food setup
let food = true;
let foodX;
let foodY;

function drawSnake() {
	ctx.clearRect(0, 0, cnvs.width, cnvs.height);
	snake.forEach(drawSnakePart);
	// draw food
	if (food) {
		foodX = getRandomInt(1, 4) * getRandomInt(1, 10) * 10 - 10;
		foodY = getRandomInt(1, 4) * getRandomInt(1, 10) * 10 - 10;
		food = false;
	}
	if (foodX === snake[0].x && foodY === snake[0].y) {
		score += 1;
		snake.push({ x: 10, y: 10 });
		food = true;
		scoreHandle.innerHTML = score;
	}
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.fillRect(foodX, foodY, 10, 10);
	ctx.strokeRect(foodX, foodY, 10, 10);
	ctx.stroke();
}

function changeSnake() {
	const head = {
		x: snake[0].x + dx,
		y: snake[0].y + dy,
	};
	snake.unshift(head);
	snake.pop();
}

// after setting up the initial coordinates drawing the snake in the middle of the board
function drawSnakePart(snakePart) {
	ctx.fillStyle = '#192A46';
	ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
	ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// game controls
document.addEventListener('keydown', changeDirection);

function changeDirection(e) {
	e.preventDefault();
	if (e.key === 'ArrowUp') {
		dy = -10;
		dx = 0;
	} else if (e.key === 'ArrowDown') {
		dy = 10;
		dx = 0;
	} else if (e.key === 'ArrowRight') {
		dy = 0;
		dx = 10;
	} else if (e.key === 'ArrowLeft') {
		dy = 0;
		dx = -10;
	}
}

// collision testing
function edgeTest() {
	if (snake[0].x == cnvs.width) {
		clearInterval(game);
		clearInterval(food);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].x == 0) {
		clearInterval(game);
		clearInterval(food);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].y == 0) {
		clearInterval(game);
		clearInterval(food);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].y == cnvs.height) {
		clearInterval(game);
		clearInterval(food);
		paused = true;
		alert('Game Over!');
	}
}

// random number generator for food pickup

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// generating food

function generateRandomfood() {}

// Event listeners for the buttons
document.querySelector('#start').addEventListener('click', startGame);
document.querySelector('#pause').addEventListener('click', pauseGame);
document.querySelector('#resume').addEventListener('click', resumeGame);

let paused = false;

function startGame() {
	game = setInterval(function game() {
		if (!paused) {
			drawSnake();
			edgeTest();
			changeSnake();
			drawBoard();
		}
	}, 100);
	if (!paused) {
		food = setInterval(function food() {
			generateRandomfood();
		}, 1000);
	}
}

// pausing the game
function pauseGame() {
	paused = true;
	console.log('paused');
}

// resuming the game
function resumeGame() {
	paused = false;
	console.log('paused');
}

drawBoard();
