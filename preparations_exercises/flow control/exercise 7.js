const toUpperIf11Chars = (message) => {
  if (message.length > 10){
    return message.toUpperCase();
  } else {
    return message;
  }
}