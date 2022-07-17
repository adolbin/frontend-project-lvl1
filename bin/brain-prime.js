#!/usr/bin/env node

import {
  correctAnswersToWin,
  getRandomNumber,
  greetPlayer,
  askQuestion,
  getPlayerAnswer,
  sayPlayerIsCorrect,
  sayPlayerIsWrong,
  congratulatePlayerOnVictory,
} from '../src/index.js';

const yesAnswer = 'yes';
const noAnswer = 'no';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const playerName = greetPlayer();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let correctAnswersGiven = 0;
let playerWasWrong = false;
while (correctAnswersGiven < correctAnswersToWin && !playerWasWrong) {
  const number = getRandomNumber(100);
  askQuestion(number);
  const answer = getPlayerAnswer();
  const shouldBePrime = isPrime(number);
  const correctAnswer = shouldBePrime ? yesAnswer : noAnswer;
  if (answer === correctAnswer) {
    sayPlayerIsCorrect();
    correctAnswersGiven += 1;
  } else {
    sayPlayerIsWrong(answer, correctAnswer, playerName);
    playerWasWrong = true;
  }
}

if (correctAnswersGiven === correctAnswersToWin) {
  congratulatePlayerOnVictory(playerName);
}
