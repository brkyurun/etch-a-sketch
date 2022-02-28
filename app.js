const gameBox = document.querySelector(".grid-container");
const randomColor = document.querySelector("#btnRandom");
const eraseButton = document.querySelector("#btnErase");
const resetButton = document.querySelector("#btnReset");
let color = "black";
createGrid(16);

randomColor.addEventListener("click", () => {
  color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
});

eraseButton.addEventListener("click", () => {
  if (color !== "") color = "";
  else if (color === "") color = "black";
});

resetButton.addEventListener("click", () => {
  const userAnswer = confirm("Clear the grid?");
  if (userAnswer) {
    reset();
  }
});

function createGrid(cellSize) {
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
    cell.style.backgroundColor = color;
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
  color = "black";
  createGrid(cellSize);
}
