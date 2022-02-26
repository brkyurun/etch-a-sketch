const gameBox = document.querySelector(".grid-container");
const resetButton = document.querySelector("#btnReset");

createGrid();

resetButton.addEventListener("click", () => {
  const userAnswer = confirm("Clear the grid?");
  if (userAnswer) {
    reset();
  }
});

function createGrid() {
  const cellNumber = getCellCount();
  gameBox.style.setProperty("--grid-rows", cellNumber);
  gameBox.style.setProperty("--grid-columns", cellNumber);

  for (let i = 0; i < cellNumber * cellNumber; i++) {
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
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    gameBox.removeChild(cell);
  });
  createGrid();
}
