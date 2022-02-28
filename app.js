const gameBox = document.querySelector(".grid-container");
const resetButton = document.querySelector("#btnReset");

createGrid(16);

resetButton.addEventListener("click", () => {
  const userAnswer = confirm("Clear the grid?");
  if (userAnswer) {
    reset();
  }
});

function createGrid(cellSize) {
  // if (cellSize == "") cellSize = getCellCount();
  gameBox.style.setProperty("--grid-rows", cellSize);
  gameBox.style.setProperty("--grid-columns", cellSize);

  for (let i = 0; i < cellSize ** 2; i++) {
    createCell();
  }
}

function createCell() {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
  });
  gameBox.appendChild(cell);
}

function getCellCount() {
  let withinRange = true;
  while (withinRange) {
    let count = +prompt("Please enter grid size.");
    if (count > 64) alert("Please enter a number between 2 and 64!");
    else if (isNaN(count)) alert("Please enter a valid number!");
    else {
      withinRange = false;
      return count;
    }
  }
}

function reset() {
  const cellSize = getCellCount();
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    gameBox.removeChild(cell);
  });
  createGrid(cellSize);
}
