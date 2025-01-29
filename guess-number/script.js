'use strict';
// DOM Manipulation
// Handling Click Events
let computed_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('👀 No Number!');
  } else if (guess === computed_number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = computed_number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.label-highscore').textContent = score;
    }
  } else if (guess !== computed_number) {
    if (score > 1) {
      displayMessage(guess > computed_number ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.label-score').textContent = score;
    }
  } else {
    displayMessage('💥 You Lost the Game!');
    document.querySelector('.score').textContent = 0;
  }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  computed_number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.label-score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
