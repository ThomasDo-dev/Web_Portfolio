document.addEventListener("DOMContentLoaded", function () {
    // Select all the game board cells
    const cells = document.querySelectorAll(".cell");

    // Select the game status display text
    const statusText = document.getElementById("game-status");

    // Select the restart button
    const restartBtn = document.getElementById("restart-btn");

    // Array representing the Tic-Tac-Toe board (empty initially)
    let board = ["", "", "", "", "", "", "", "", ""];

    // The current player (X starts first)
    let currentPlayer = "X";

    // Game state (true = game ongoing, false = game over)
    let gameActive = true;

    // Define all possible winning combinations in Tic-Tac-Toe
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    // Function that handles when a player clicks a cell
    function handleCellClick(event) {
        const cell = event.target; // Get the clicked cell
        const index = cell.getAttribute("data-index"); // Get its position in the board

        // Only allow moves if the cell is empty and the game is still active
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer; // Update board array with player's move
            cell.textContent = currentPlayer; // Update the UI (display X or O)
            cell.classList.add(currentPlayer.toLowerCase()); // Add class for styling (e.g., "x" or "o")

            // Check if the current player has won
            if (checkWinner(currentPlayer)) {
                if (currentPlayer === "X") {
                    statusText.textContent = "You Win!"; // Display win message for the player
                } else {
                    statusText.textContent = "My Bot Wins!"; // Display win message for the bot
                }
                gameActive = false; // Stop the game
                return;
            }

            // Check for a draw (if no empty spaces are left)
            if (!board.includes("")) {
                statusText.textContent = "It's a Draw!"; // Display draw message
                gameActive = false; // Stop the game
                return;
            }

            // Switch to the bot's turn (O moves after X)
            currentPlayer = "O";
            setTimeout(botMove, 500); // Delay to make the bot move feel more natural
        }
    }

    // Function for the bot to make a move (chooses a random empty cell)
    function botMove() {
        if (!gameActive) return; // Stop if the game is already over

        // Find all empty cells
        let emptyCells = board.map((cell, index) => cell === "" ? index : null).filter(index => index !== null);

        // If there are empty cells, pick one at random
        if (emptyCells.length > 0) {
            let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[randomIndex] = "O"; // Update board with bot's move

            // Find the corresponding cell in the UI and update it
            let botCell = document.querySelector(`.cell[data-index="${randomIndex}"]`);
            botCell.textContent = "O";
            botCell.classList.add("o");

            // Check if the bot (O) has won
            if (checkWinner("O")) {
                statusText.textContent = "My Bot Wins!"; // Display winner message
                gameActive = false; // Stop the game
                return;
            }

            // Check for a draw again after bot's move
            if (!board.includes("")) {
                statusText.textContent = "It's a Draw!";
                gameActive = false;
                return;
            }

            // Switch back to the player (X)
            currentPlayer = "X";
        }
    }

    // Function to check if a player has won the game
    function checkWinner(player) {
        // Loop through all winning combinations
        return winningCombinations.some(combination =>
            combination.every(index => board[index] === player) // Check if all cells match the player's mark
        );
    }

    // Function to restart the game
    function restartGame() {
        // Reset board array to empty values
        board = ["", "", "", "", "", "", "", "", ""];

        // Reset game state
        gameActive = true;

        // Set the starting player back to X
        currentPlayer = "X";

        // Reset the status text
        statusText.textContent = "Click on a cell to play";

        // Reset all cells in the UI
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("x", "o"); // Remove any added class styles
        });
    }

    // Attach event listeners to each cell for player clicks
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));

    // Attach event listener to the restart button
    restartBtn.addEventListener("click", restartGame);
});
