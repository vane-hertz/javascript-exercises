//Without using a for, while, or do/while loop, write some code 
//that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function check3(arr) {
  return arr.includes(3);
}

console.log(check3(numbers1));
console.log(check3(numbers2));
console.log(check3(numbers3));