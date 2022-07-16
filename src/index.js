import readlineSync from 'readline-sync';

export const correctAnswersToWin = 3;

export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function greetPlayer() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
}

export function askQuestion(question) {
  console.log(`Question: ${question}`);
}

export function getPlayerAnswer() {
  return readlineSync.question('Your answer: ');
}

export function sayPlayerIsCorrect() {
  console.log('Correct!');
}

export function sayPlayerIsWrong(givenAnswer, correctAnswer, playerName) {
  console.log(`'${givenAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
}

export function congratulatePlayerOnVictory(playerName) {
  console.log(`Congratulations, ${playerName}!`);
}
