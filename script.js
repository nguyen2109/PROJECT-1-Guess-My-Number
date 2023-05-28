'use strict';
/*
document.querySelector('.message').textContent = '✅ CORRECT NUMBER';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 1;
document.querySelector('.guess').value = 12;
*/

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ NO NUMBER';
  }

  if (score < 1) {
    alert('Bạn đã thua trò chơi hãy chơi lại nhé');
    setTimeout(resetGame, 0);
  }

  if (guess > number) {
    document.querySelector('body').style.backgroundColor = '#b34747';
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('body').style.backgroundColor = '#b34747';
    document.querySelector('.message').textContent = '📉 Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === number) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '✅ CORRECT NUMBER';
  }
});

// Chức năng play again
function resetGame() {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
}
document.querySelector('.again').addEventListener('click', resetGame);
