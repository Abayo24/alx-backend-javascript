const readline = require('readline');
const displayMessage = require('./0-console');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

displayMessage('Welcome to Holberton School, what is your name?');

read.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

read.on('close', () => {
  console.log('This important software is now closing')
});
