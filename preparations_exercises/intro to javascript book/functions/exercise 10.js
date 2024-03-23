//Using the code from Exercise 9, classify each variable
//name as either global or local. For our purposes here,
//you may assume that the code from Exercise 9 is the entire program.

function multiply(left, right) { //multiply is global
  let product = left * right; //product, left, and right are local
  return product;
}

function getNumber(prompt) { //getNumber, parseFloat, and question are global
  return parseFloat(question(prompt)); //prompt is local.
}

let left = getNumber('Enter the first number: '); //left is global
let right = getNumber('Enter the second number: '); //right is global
console.log(`${left} * ${right} = ${multiply(left, right)}`); //console is global.