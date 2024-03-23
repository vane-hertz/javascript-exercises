const repeat = (repeatAmount, str) => {
  let repeatedStr = '';

  while (repeatAmount > 0) {
    repeatedStr += str;
    repeatAmount -= 1;
  }
  return repeatedStr;
}