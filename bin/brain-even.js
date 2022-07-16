#!/usr/bin/env node

import readlineSync from 'readline-sync';

const correctAnswersToWin = 3;
const yesAnswer = 'yes';
const noAnswer = 'no';

function getRandomNumber() {
  return Math.floor(Math.random() * 30);
}

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersGiven = 0;
let playerWasWrong = false;
while (correctAnswersGiven < correctAnswersToWin && !playerWasWrong) {
  const generatedNumber = getRandomNumber();
  console.log(`Question: ${generatedNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if ((generatedNumber % 2 === 0 && answer === yesAnswer)
    || (generatedNumber % 2 !== 0 && answer === noAnswer)) {
    console.log('Correct!');
    correctAnswersGiven += 1;
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, Bill!');
    playerWasWrong = true;
  }
}

if (correctAnswersGiven === correctAnswersToWin) {
  console.log(`Congratulations, ${playerName}!`);
}
