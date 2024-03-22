//Identify all of the variables, object property names, 
//primitive values, and objects shown in the following code 
//(assume the code has not been executed). Don't panic if you 
//miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) { //variables: hello, greeting, name; object: hello
  return greeting + ' ' + name; // primitive: ' '
}

function xyzzy() { //variable & object xyzzy
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; //primitives: 1, 2, 3, 4, 5 //objects the return value, the d value, and the array
}

const howdy = hello('Hi', 'Grace'); //variable howdy, hello; primitives: 'Hi', 'Grace'
let foo = xyzzy(); //variable foo; object xyzzy