const catAge = age => {
  if (age === 0) {
    return 0;
  } else if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 24;
  } else {
    return (age - 2) * 4 + 24;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
console.log(catAge(4)); // 32