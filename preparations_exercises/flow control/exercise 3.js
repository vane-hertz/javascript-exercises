const evenOrOdd = num => {
  if (!Number.isInteger(number)){
    console.log('Error: non-number entered.')
    return;
  } else if (num % 2 === 0){
    console.log('even')
  } else {
    console.log('odd')
  }
}