// drawing the 30 x 30 game board
let boardX = 30;
let boardY = 30;

function drawBoard(){
    let gameBoard = document.querySelector("#gameBoard");
    for (let index = 0; index < boardY; index++) {
        for (let index = 0; index < boardX; index++) {
            gameBoard.appendChild(document.createElement("div"));        
        }
        
    }
}

drawBoard();
