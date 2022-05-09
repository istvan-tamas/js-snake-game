// drawing the 30 x 30 game board
let boardX = 30;
let boardY = 30;



function drawBoard(){
    let gameBoard = document.querySelector("#gameBoard");
    for (let index = 0; index < boardY; index++) {
            let div = document.createElement("div");
            div.className = "square";
            gameBoard.appendChild(div);        
    }
}

drawBoard();
