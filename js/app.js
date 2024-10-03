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
loadCookie();
showScoreBoard();
button0.addEventListener("click", () => {
  //ALLT här inne händer när jag tycker på knappen
  getRandomNumberPlayer();
  showRandomNumberPlayer();
  getRandomNumberAi();
  showRandomNumberAi();
  showResult();
  showScoreBoard();
  saveCookie();
});


function getRandomNumberPlayer() {
playerRoll = Math.floor(Math.random() * 6 ) +1;
}

function showRandomNumberPlayer() {
  playerRollText.innerHTML = " Player Score " + playerRoll;
}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6 ) +1;
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

    playerScoreText.innerHTML = " Table Score Player: " + playerScore;

    aiScoreText.innerHTML = " Table Score Ai: " + aiScore;

    scoreBoardDrawText.innerHTML = " Draw " + scoreBoardDraw;

}


function saveCookie() {

  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 29 Dec 2025 12:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + ";expires=Thu, 29 Dec 2025 12:00:00 UTC";
  document.cookie = "scoreBoardDraw=" + scoreBoardDraw + ";expires=Thu, 29 Dec 2025 12:00:00 UTC";
}

function loadCookie() {
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
scoreBoardDraw = getCookie("scoreBoardDraw");
}





function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}


