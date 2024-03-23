//Given a list of numbers, write some code to find and display 
//the largest numeric value in the list.

/* Wrong implementation
function largestNum(arr) {
  let largeNum = arr[0];

  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] > largeNum){
      largeNum = arr[i];
    }
  }
  return largeNum;
}
*/

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));