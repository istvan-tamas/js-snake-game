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

console.log(ctx.canvas.height);

console.log(ctx.canvas.width);

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
