const capitalizeWords = str => {
  let wordArr = str.split(' ');
  let capitalizedWordArr = [];

  for (let i = 0; i < wordArr.length; i += 1) {
    capitalizedWordArr.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1));
  }
  return capitalizedWordArr.join(' ');
}

console.log(capitalizeWords('launch school tech & talk'));