const compCard = document.querySelector("#comp-card");
const myCard = document.querySelector("#my-card");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const restart = document.querySelector("#restart");

let n = 0;

const addEvent = () => {
  rock.removeEventListener("click", rockOnclick);
  paper.removeEventListener("click", paperOnclick);
  scissors.removeEventListener("click", scissorsOnclick);
};

const removeEvent = () => {
  rock.addEventListener("click", rockOnclick);
  paper.addEventListener("click", paperOnclick);
  scissors.addEventListener("click", scissorsOnclick);
};

const threeSecTimer = () => {
  addEvent();
  setTimeout(() => {
    removeEvent();
    afterClick();
    liveScore.innerText = "";
    onGameOver();
  }, "3000");
};

const turnOfComp = () => {
  let randomNumber = Math.random() * 3;
  n = randomNumber;
  console.log(randomNumber);
  if (0 <= randomNumber && randomNumber < 1) {
    compCard.src = "pics/rock.png";
  } else if (1 <= randomNumber && randomNumber < 2) {
    compCard.src = "pics/paper.png";
  } else {
    compCard.src = "pics/scissors.png";
  }
};

const afterClick = () => {
  myCard.src = "pics/card.png";
  compCard.src = "pics/card.png";
};

const rockOnclick = () => {
  timer();
  myCard.src = "pics/rock.png";
  turnOfComp();
  threeSecTimer();
  updateScoreOnRock();
};

const paperOnclick = () => {
  timer();
  myCard.src = "pics/paper.png";
  turnOfComp();
  threeSecTimer();
  updateScoreOnPaper();
};

const scissorsOnclick = () => {
  timer();
  myCard.src = "pics/scissors.png";
  turnOfComp();
  threeSecTimer();
  updateScoreOnScissors();
};

rock.addEventListener("click", rockOnclick);
paper.addEventListener("click", paperOnclick);
scissors.addEventListener("click", scissorsOnclick);

restart.addEventListener("click", () => {
  myCard.src = "pics/card.png";
  compCard.src = "pics/card.png";
  scoreReset();
  game.classList.remove("hide");
  msg.classList.add("hide");
  restart.innerText = "Restart Game";
});
