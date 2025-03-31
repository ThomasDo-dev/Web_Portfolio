document.addEventListener('DOMContentLoaded', function () {
    // Select all the cells
    const cells = document.querySelectorAll(".cell");

    // Add click event listener to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            // Check if the cell is already filled
            if (cell.textContent === "") {
                cell.textContent = "X";  // Add "X" in the clicked cell
            }
        });
    });
});
