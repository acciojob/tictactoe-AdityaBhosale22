const submitBtn = document.getElementById("submit");
const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");

const gameDiv = document.getElementById("game");
const messageDiv = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let board = ["", "", "", "", "", "", "", "", ""];

submitBtn.addEventListener("click", () => {
  player1 = player1Input.value;
  player2 = player2Input.value;

  if (!player1 || !player2) return;

  currentPlayer = player1;
  messageDiv.innerText = `${currentPlayer}, you're up`;

  gameDiv.classList.remove("hidden");
});

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "") return;

    cell.innerText = currentSymbol;
    board[index] = currentSymbol;

    if (checkWinner()) {
      messageDiv.innerText = `${currentPlayer} congratulations you won!`;
      return;
    }

    // switch turn
    if (currentSymbol === "x") {
      currentSymbol = "o";
      currentPlayer = player2;
    } else {
      currentSymbol = "x";
      currentPlayer = player1;
    }

    messageDiv.innerText = `${currentPlayer}, you're up`;
  });
});

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return wins.some(pattern =>
    pattern.every(i => board[i] === currentSymbol)
  );
}
