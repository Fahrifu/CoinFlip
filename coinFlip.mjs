import readline from "node:readline/promises"
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

const head = "Heads";
const tail = "Tail";
const questionText = "Heads or Tails?";
const youWin = "you win";
const youLose = "you lose";

const borderValue = 0.5;

const guess = await rl.question(questionText);

const randomValue = Math.random();

let outcome = "";
if (randomValue > borderValue) {
    outcome = head;
} else {
    outcome = tail;
}

if (outcome == guess) {
    console.log(outcome + "," + youWin);
} else {
    console.log(outcome + "," + youLose);
}

process.exit();