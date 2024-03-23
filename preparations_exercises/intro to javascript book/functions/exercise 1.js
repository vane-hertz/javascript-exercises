//What does this code log to the console? Does executing the
//foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//This code will log 1. Foo makes a new local variable bar not the same
//as the global variable bar, and foo returns 2 but nothing is done
//with that value.