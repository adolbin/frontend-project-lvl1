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

const possibleOperations = ['+', '-', '*'];

const calculateCorrectAnswer = (firstOperand, operator, secondOperand) => {
  if (operator === '+') {
    return firstOperand + secondOperand;
  }
  if (operator === '-') {
    return firstOperand - secondOperand;
  }
  return firstOperand * secondOperand;
};

const playerName = greetPlayer();

console.log('What is the result of the expression?');
let correctAnswersGiven = 0;
let playerWasWrong = false;
while (correctAnswersGiven < correctAnswersToWin && !playerWasWrong) {
  const firstOperand = getRandomNumber(30);
  const operator = possibleOperations[getRandomNumber(2)];
  const secondOperand = getRandomNumber(30);

  askQuestion(`${firstOperand} ${operator} ${secondOperand}`);
  const answer = Number(getPlayerAnswer());
  const correctAnswer = calculateCorrectAnswer(firstOperand, operator, secondOperand);
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
