var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I have your name?")
console.log('Hi ' + userName + '!');
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, ' + userName + ' loves ' + favFood + '!');