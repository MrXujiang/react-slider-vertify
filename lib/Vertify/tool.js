'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getRandomNumberByRange = getRandomNumberByRange;
exports.sum = sum;
exports.square = square;

function getRandomNumberByRange(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}
