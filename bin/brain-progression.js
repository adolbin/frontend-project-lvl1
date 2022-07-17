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

const maxProgressionSize = 10;
const generateProgression = (firstNumber, increment) => {
  const progression = [firstNumber];
  for (let i = 0; i < maxProgressionSize - 1; i += 1) {
    progression.push(progression[progression.length - 1] + increment);
  }
  return progression;
};

const playerName = greetPlayer();

console.log('What number is missing in the progression?');
let correctAnswersGiven = 0;
let playerWasWrong = false;
while (correctAnswersGiven < correctAnswersToWin && !playerWasWrong) {
  const increment = getRandomNumber(30);
  const progression = generateProgression(getRandomNumber(10), increment);
  const missingElementPos = getRandomNumber(progression.length - 1);
  const missingElement = progression[missingElementPos];
  progression[missingElementPos] = '..';

  askQuestion(`${progression.join(' ')}`);
  const answer = Number(getPlayerAnswer());
  if (answer === missingElement) {
    sayPlayerIsCorrect();
    correctAnswersGiven += 1;
  } else {
    sayPlayerIsWrong(answer, missingElement, playerName);
    playerWasWrong = true;
  }
}

if (correctAnswersGiven === correctAnswersToWin) {
  congratulatePlayerOnVictory(playerName);
}
