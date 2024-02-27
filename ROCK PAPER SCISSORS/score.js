let myScore = 0;
let compScore = 0;
const myScoreDisplay = document.querySelector("#my-score");
const compScoreDisplay = document.querySelector("#comp-score");
const liveScore = document.querySelector("#this-score");
const game = document.querySelector(".game");
const msg = document.querySelector(".msg");

const compPlus = () => {
  liveScore.innerHTML = "Comp<br/>+1";
};

const myPlus = () => {
  liveScore.innerHTML = "You<br/>+1";
};

const tie = () => {
  liveScore.innerText = "Tie";
};

const updateScoreOnRock = () => {
  if (1 <= n && n < 2) {
    compScore++;
    compPlus();
    compScoreDisplay.innerText = `Comp Score : ${compScore}`;
  } else if (2 <= n && n < 3) {
    myScore++;
    myPlus();
    myScoreDisplay.innerText = `Your Score : ${myScore}`;
  } else {
    tie();
  }
};

const updateScoreOnPaper = () => {
  if (2 <= n && n < 3) {
    compScore++;
    compPlus();
    compScoreDisplay.innerText = `Comp Score : ${compScore}`;
  } else if (0 <= n && n < 1) {
    myScore++;
    myPlus();
    myScoreDisplay.innerText = `Your Score : ${myScore}`;
  } else {
    tie();
  }
};

const updateScoreOnScissors = () => {
  if (0 <= n && n < 1) {
    compScore++;
    compPlus();
    compScoreDisplay.innerText = `Comp Score : ${compScore}`;
  } else if (1 <= n && n < 2) {
    myScore++;
    myPlus();
    myScoreDisplay.innerText = `Your Score : ${myScore}`;
  } else {
    tie();
  }
};

const scoreReset = () => {
  myScore = 0;
  myScoreDisplay.innerText = `Your Score : ${myScore}`;
  compScore = 0;
  compScoreDisplay.innerText = `Comp Score : ${compScore}`;
};

const gameOver = () => {
  game.classList.add("hide");
  msg.classList.remove("hide");
  restart.innerText = "New Game";
};

const onGameOver = () => {
  if (compScore > 2) {
    gameOver();
    msg.innerText = "OOPS!!!You Lose!!!";
  } else if (myScore > 2) {
    gameOver();
    msg.innerText = "HURREY...You Win...";
  }
};
