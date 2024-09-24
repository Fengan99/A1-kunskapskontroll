//Text

const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");
const resultText = document.getElementById("resultText");
const playerScoreText = document.getElementById("playerScoreText");
const aiScoreText = document.getElementById("aiScoreText");
const scoreBoardDrawText = document.getElementById("scoreBoardDrawText");
const button0 = document.getElementById("button0");


// DATA

let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let scoreBoardDraw = 0;

//FUNCTION

button0.addEventListener("click", () => {
  //ALLT här inne händer när jag tycker på knappen
  getRandomNumberPlayer();
  showRandomNumberPlayer();
  getRandomNumberAi();
  showRandomNumberAi();
  showResult();
  showScoreBoard();

});

function getRandomNumberPlayer() {
playerRoll = Math.floor(Math.random() * 6 ) +1;
}

function showRandomNumberPlayer() {
  playerRollText.innerHTML = " Player Score " + playerRoll;
}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6 ) +1
}

function showRandomNumberAi() {
  aiRollText.innerHTML = " Ai Score " + aiRoll;
}

function showResult() {
  if (playerRoll > aiRoll) {
    playerScore++;
    resultText.innerHTML = " Player win! ";
  } else if (playerRoll < aiRoll) {
    aiScore++;
    resultText.innerHTML = " Ai win! ";
  } else {
    scoreBoardDraw++;
    resultText.innerHTML = "Draw!";
  }
}

function showScoreBoard() {

  if (playerRoll > aiRoll) {

    playerScoreText.innerHTML = " Player Score: " + playerScore;
  }
  else if (playerRoll < aiRoll) {

    aiScoreText.innerHTML = " Ai Score: " + aiScore;

  }
  else  {
    scoreBoardDrawText.innerHTML = " Draw " + scoreBoardDraw;
  }
}



