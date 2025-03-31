document.addEventListener("DOMContentLoaded"), () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("game-status");
    const restartBtn = document.getElementById("restart-btn");

    let  board = ["","","","","","","","",""];
    let currentPlay = "X";
}

cells.forEach(cell => {cell.addEventListener("click", handleClick)});

function handleClick(event){
    const cell = event.target;
    const index = cell.dataset.index;

    if (board[index] != "") return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWinner();
    currentPlayer = (currentPlayer === "X") ? "0" : "X"; // "===" check value and type
}

function checkWinner() {
    const winningPatterns = [

    ]
}