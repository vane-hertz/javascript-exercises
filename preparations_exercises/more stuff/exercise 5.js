//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//it splits the string into an array seperated by a space character
//it then reverses the order of that array, then returns a new array
//that holds the length of each element of the original array.