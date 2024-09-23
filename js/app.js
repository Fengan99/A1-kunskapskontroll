const textField0 = document.getElementById("text0");
textField0.innerHTML = "Hej på dig";
textField0.style.color = "red";


const text1 = document.getElementById("text1");
text1.innerHTML = " Ai spelar";
text1.style.color = "green";

const text2 = document.getElementById("text2");
text2.innerHTML = " spelar nummer ett"
text2.style.color = "blue";



//knappen




let score = 0
const button0 = document.getElementById("button0");

button0.addEventListener("click", () => {
  increaseScore(1);
  updateScore();
});

function increaseScore(){
  score++;
}

function updateScore(){
  textField0.innerHTML = score;
}

