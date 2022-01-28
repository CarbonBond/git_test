/* eslint-disable no-undef */
const {
  sayHello, allCaps, reverseString, calculator,
} = require('./script');

test('Should say Hello James', () => {
  expect(sayHello('James')).toBe('Hello James');
});

test('Should be all caps', () => {
  expect(allCaps('hello')).toMatch('HELLO');
});

test('Should be reversed', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('Added number should be 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtracted number should be 4', () => {
  expect(calculator.subtract(7, 3)).toBe(4);
});

test('Multiplied number should be 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Devided number should be 4', () => {
  expect(calculator.devide(8, 2)).toBe(4);
});
