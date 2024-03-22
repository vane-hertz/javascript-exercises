//Write a function similar to the oddLengths function from 
//Exercise 6, but don't use map or filter. Instead, try to use the 
//reduce method.

function oddLengths(arr) {
  return arr.reduce((acc, elem) => {
    if (elem.length % 2 === 1){
      acc.push(elem.length);
    }
    return acc
  }, [])
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]