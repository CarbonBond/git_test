const sayHello = (fName) => `Hello ${fName}`;

const allCaps = (string) => string.toUpperCase();

const reverseString = (string) => {
  let newString = '';
  for (let i = string.length; i > -1; i -= 1) {
    newString += string.substr(i - 1, 1);
  }
  return newString;
};

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  devide: (x, y) => x / y,

};
module.exports = {
  sayHello, allCaps, reverseString, calculator,
};
