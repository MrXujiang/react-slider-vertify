function getRandomNumberByRange(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

export { getRandomNumberByRange, sum, square };
