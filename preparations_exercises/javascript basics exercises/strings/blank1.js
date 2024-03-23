const isBlank = str => str === '';

console.log(isBlank('fas')); // false
isBlank('  ');   // false
isBlank('');     // true