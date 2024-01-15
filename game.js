let cnvs = document.querySelector('#gameBoard');
let ctx = cnvs.getContext('2d');

let scoreHandle = document.querySelector('#score');
let score = 0;

let startX = ctx.canvas.width / 2;
let startY = ctx.canvas.height / 2;

let dx = 10;
let dy = 0;

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

function changeSnake(snake) {
	const head = {
		x: snake[0].x + dx,
		y: snake[0].y + dy,
	};
	snake.unshift(head);
	snake.pop();
}

function changeDirection(e) {
	e.preventDefault();
	if (e.key === 'ArrowUp' && !paused && dy != 10) {
		dy = -10;
		dx = 0;
	} else if (e.key === 'ArrowDown' && !paused && dy != -10) {
		dy = 10;
		dx = 0;
	} else if (e.key === 'ArrowRight' && !paused && dx != -10) {
		dy = 0;
		dx = 10;
	} else if (e.key === 'ArrowLeft' && !paused && dx != 10) {
		dy = 0;
		dx = -10;
	}
}

// collision testing
function edgeTest(snake) {
	if (snake[0].x >= 400) {
		clearInterval(game);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].x < 0) {
		clearInterval(game);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].y < 0) {
		clearInterval(game);
		paused = true;
		alert('Game Over!');
	} else if (snake[0].y >= 400) {
		clearInterval(game);
		paused = true;
		alert('Game Over!');
	}
}

function selfTest(snake) {
	for (let i = 1; i < snake.length; i++) {
		if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
			clearInterval(game);
			paused = true;
			alert('Game Over!');
		}
	}
}

function foodTest(snake) {
	if (snake[0].x == foodX && snake[0].y == foodY) {
		const tail = {
			x: snake[0].x + dx,
			y: snake[0].y + dy,
		};
		snake.push(tail);
		score++;
		food = true;
		scoreHandle.innerHTML = score;
	}
}

let paused = true;

let food = true;
let foodX;
let foodY;

function startGame(snake) {
	game = setInterval(function game() {
		if (!paused) {
			changeSnake(snake);
			drawSnake(snake);
			edgeTest(snake);
			selfTest(snake);
			foodTest(snake);
			drawFood();
		}
	}, 120);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function drawFood() {
	if (food) {
		foodX = getRandomInt(1, 4) * getRandomInt(1, 10) * 10 - 10;
		foodY = getRandomInt(1, 4) * getRandomInt(1, 10) * 10 - 10;
	}
	ctx.beginPath();
	ctx.fillRect(foodX, foodY, 10, 10);
	ctx.strokeRect(foodX, foodY, 10, 10);
	ctx.stroke();
	food = false;
}

document.querySelector('#start').addEventListener('click', newGame);
document.querySelector('#restart').addEventListener('click', restartGame);
document.querySelector('#pause').addEventListener('click', pauseGame);
document.querySelector('#resume').addEventListener('click', resumeGame);
document.addEventListener('keydown', changeDirection);

function newGame() {
	paused = false;
	startGame(snake);
	document.querySelector('#start').removeAttribute('class');
	document.querySelector('#start').setAttribute('class', 'btn disabled');
}

function restartGame() {
	clearInterval(game);
	snake = [
		{ x: startX, y: startY },
		{ x: startX - 10, y: startY },
		{ x: startX - 20, y: startY },
		{ x: startX - 30, y: startY },
	];
	dx = 10;
	dy = 0;
	score = 0;
	food = true;
	scoreHandle.innerHTML = score;
	paused = false;
	startGame(snake);
}

function pauseGame() {
	paused = true;
}

function resumeGame() {
	paused = false;
}
