const multiply = (num1, num2) => num1 * num2;

rlSync = require('readline-sync');

let num1 = Number(rlSync.question('Enter the first number: '));
let num2 = Number(rlSync.question('Enter the second number: '));
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);