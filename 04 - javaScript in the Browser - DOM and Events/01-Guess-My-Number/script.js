'use strict';

/*
console.log(document.querySelector('.message').textContent);
// Start guessing...


document.querySelector('.message').textContent = 'Correct Number !'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector(".guess").value = 25
*/

let secrectNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;

let numberText = document.querySelector(".number");
let body = document.querySelector("body");
let highScoreText = document.querySelector(".highscore");
let scoreText = document.querySelector(".score")
let guess = document.querySelector(".guess");

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector(".guess").value)

  // when there is no input
  if (!guess) {

    displayMessage("⛔ No number!")
  } else if (guess === secrectNumber) {
    // when player wins
    displayMessage('Correct Number !');
    numberText.textContent = secrectNumber
    body.style.backgroundColor = "#60b347";
    numberText.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
    // when gues is wrong
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? 'To High 📈 !' : '📉 To LoW')

      score--;
      scoreText.textContent = score
    } else {
      displayMessage("You lost the game")
    }

  }
})

// AGAIN BUTTON
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...');

  numberText.textContent = "?"
  body.style.backgroundColor = "#222";

  numberText.style.width = "15rem"


  scoreText.textContent = score;

  guess.value = ""

})