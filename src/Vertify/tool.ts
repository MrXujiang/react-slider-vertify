function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

function sum(x: number, y: number) {
  return x + y;
}

function square(x: number) {
  return x * x;
}

export { getRandomNumberByRange, sum, square };
