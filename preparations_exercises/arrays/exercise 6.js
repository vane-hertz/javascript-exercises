//Use map and filter to first determine the lengths of all the 
//elements in an array of string values, then discard the even 
//values (keep the odd values).

function oddLengths(arr) {
  let lengths = arr.map(string => string.length)
  return lengths.filter(num => num % 2 === 0 ? false : true)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]