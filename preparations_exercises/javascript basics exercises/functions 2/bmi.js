const calcBMI = (height, weight) => {
  return (weight / (height / 100) ** 2).toFixed(2);
}