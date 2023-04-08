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

// game controls
document.querySelector('#start').addEventListener('click', startGame);
document.querySelector('#pause').addEventListener('click', pauseGame);
document.querySelector('#resume').addEventListener('click', resumeGame);

function pauseGame() {
	paused = true;
}

function resumeGame() {
	paused = false;
}
