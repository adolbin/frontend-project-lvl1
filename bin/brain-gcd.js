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

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const playerName = greetPlayer();

console.log('Find the greatest common divisor of given numbers.');
let correctAnswersGiven = 0;
let playerWasWrong = false;
while (correctAnswersGiven < correctAnswersToWin && !playerWasWrong) {
  const firstNumber = getRandomNumber(20);
  const secondNumber = getRandomNumber(20);

  askQuestion(`${firstNumber} ${secondNumber}`);
  const answer = Number(getPlayerAnswer());
  const correctAnswer = gcd(firstNumber, secondNumber);
  if (correctAnswer === answer) {
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
