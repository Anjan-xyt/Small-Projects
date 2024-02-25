let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".winner");

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
  msg.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of win) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        msg.innerText = `Congratulations......Winner is TEAM ${pos1val}........`;
        msg.classList.remove("hide");
        disableBoxes();
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
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = "true";
    checkWinner();
  });
});

resetBtn.addEventListener("click", resetGame);
