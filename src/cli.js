import readlineSync from 'readline-sync'

export function greetPlayer() {
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    return playerName;
}
