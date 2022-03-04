const gameBox = document.querySelector(".grid-container");
const randomColor = document.querySelector("#btnRandom");
const eraseButton = document.querySelector("#btnErase");
const resetButton = document.querySelector("#btnReset");
let coloringMode = blackMode;
createGrid(16);

randomColor.addEventListener("click", () => {
  if (coloringMode !== rainbowMode && coloringMode !== eraserMode) {
    randomColor.classList.toggle("active");
    coloringMode = rainbowMode;
  } else if (coloringMode === rainbowMode && coloringMode !== eraserMode) {
    randomColor.classList.toggle("active");
    coloringMode = blackMode;
  }
});

eraseButton.addEventListener("click", () => {
  if (coloringMode !== eraserMode && coloringMode !== rainbowMode) {
    eraseButton.classList.toggle("active");
    coloringMode = eraserMode;
  } else if (coloringMode === eraserMode && coloringMode !== rainbowMode) {
    eraseButton.classList.toggle("active");
    coloringMode = blackMode;
  }
});

resetButton.addEventListener("click", () => {
  const userAnswer = confirm("Clear the grid?");
  if (userAnswer) {
    reset();
  }
});

function rainbowMode(element) {
  element.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 360
  )}, 100%, 50%)`;
}

function blackMode(element) {
  element.style.backgroundColor = "black";
}

function eraserMode(element) {
  element.style.backgroundColor = "";
}

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
    switch (coloringMode) {
      case rainbowMode:
        rainbowMode(cell);
        break;
      case eraserMode:
        eraserMode(cell);
        break;
      case blackMode:
        blackMode(cell);
        break;
    }
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
