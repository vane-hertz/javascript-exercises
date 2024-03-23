//Reimplement the factorial function from exercise 2 using recursion.
//Once again, you may assume that the argument is always a positive
//integer.

function factorial(num) {
  let product = 1;
  if (num > 1) {
    product = num * factorial(num - 1);
  }
  return product;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));