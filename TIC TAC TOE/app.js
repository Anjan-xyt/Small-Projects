let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".after-win");
let container = document.querySelector(".container");
let btn = document.querySelector("#reset-btn");

let player1moves = 5;
let player2moves = 4;
let count = 0;

let win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let resetGame = () => {
  turnX = true;
  enableBoxes();
  player1moves = 5;
  document.querySelector(
    ".moves-left-player-1"
  ).innerText = `Moves left : ${player1moves}`;
  player2moves = 4;
  document.querySelector(
    ".moves-left-player-2"
  ).innerText = `Moves left : ${player2moves}`;
  btn.innerText = "Play Again";
  container.classList.remove("hide");
  msg.classList.add("hide");
};

const updateMovesPlayer1 = () => {
  player1moves--;
  document.querySelector(
    ".moves-left-player-1"
  ).innerText = `Moves left : ${player1moves}`;
};

const updateMovesPlayer2 = () => {
  player2moves--;
  document.querySelector(
    ".moves-left-player-2"
  ).innerText = `Moves left : ${player2moves}`;
};

const checkWinner = () => {
  for (let pattern of win) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        container.classList.add("hide");
        msg.classList.remove("hide");
        btn.innerText = "New Game";
        disableBoxes();
        if (pos1val === "X") {
          document.querySelector(".after-win").innerText =
            "Congratulations...Player 1 Wins...";
        } else {
          document.querySelector(".after-win").innerText =
            "Congratulations...Player 2 Wins...";
        }
      }
    }
  }
};

let turnX = true;

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.stopPropagation();
    if (turnX) {
      box.innerText = "X";
      turnX = false;
      updateMovesPlayer1();
    } else {
      box.innerText = "O";
      turnX = true;
      updateMovesPlayer2();
    }
    box.disabled = "true";
    checkWinner();
    checkEndGame();
  });
});

resetBtn.addEventListener("click", resetGame);

const checkEndGame = () => {
  for (let i = 0; i < 9; i++) {
    if (boxes[i].innerText === "") {
      count++;
    }
  }
  if (count === 0) {
    document.querySelector(".after-win").innerText = "OPPS!!! Start a new game!!!";
    container.classList.add("hide");
    msg.classList.remove("hide");
    btn.innerText = "New Game";
  }
  count = 0;
};
