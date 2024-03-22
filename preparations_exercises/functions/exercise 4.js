//What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

//The following code logs nothing to the console, as the function returns
//before the console.log() call.