const isBlank = str => {
  if (str.length === 0) {
    return true;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      return false;
    }
  }
  return true;
}

console.log(isBlank('    s      ')); // false
isBlank('  ');   // true
isBlank('');     // true