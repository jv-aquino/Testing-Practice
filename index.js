const capitalize = (str) => {
  if (str.length == 0) {
    return str;
  }

  str = str.split('');
  str[0] = str[0].toUpperCase();

  str.forEach((letter, index) => {
    if (letter == ' ') {
      str[index + 1] = str[index + 1].toUpperCase();
    }
  });

  return str.join("");
}

const reverse = (str) => {
  if (str.length == 0) {
    return str;
  }
  
  return str;
}

const calculator = (() => {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;

  const divide = (x, y) => {
    if (y == 0) {
      throw new Error("Division by 0");
    }
    return x / y;
  }

  const multiply = (x, y) => (x == 0 || y == 0) ? 0 : x * y;

  return {add, subtract, divide, multiply}
})();

module.exports = {capitalize, reverse, calculator};