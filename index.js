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
  
  str = str.split('');

  for (let i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++, j--) {
    let letter = str[i];
    let exchangeLetter = str[j];

    str[i] = exchangeLetter;

    str[j] = letter;
  }
  
  return str.join("");
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

const caesarCipher = (str, key) => {
  if (str.length == 0) {
    return str;
  }

  if (key >= 0) {
    key = key % 26;
  } else {
    key = key % -26;
  }

  let minLimit = 65;
  let maxLimit = 90;

  str = str.split("");

  str.forEach((char, i) => {
    if (char == char.toUpperCase() && char == char.toLowerCase()) {
      return;
    }

    let code = char.charCodeAt(0);
    code += key;

    if (char == char.toLowerCase()) {
      code = (code > maxLimit + 32) ? code - 26 : code;
      code = (code < minLimit + 32) ? code + 26 : code;
    }
    else {
      code = (code > maxLimit) ? code - 26 : code;
      code = (code < minLimit) ? code + 26 : code;
    }

    str[i] = String.fromCharCode(code);
  });

  return str.join("");
}

const analyzeArray = (arr) => {
  if (arr.length == 0 || !Array.isArray(arr)) {
    throw new Error("The parameters must be an array of numbers");
  }
  else if (arr.every(item => typeof item != "number")) {
    throw new Error("The array must contain only numbers");
  }

  let stats = {
    average: null,
    min: null,
    max: null,
    length: arr.length
  }

  stats.average = arr.reduce((sum, cur) => sum + cur, 0) / stats.length;
  stats.min = Math.min(...arr);
  stats.max = Math.max(...arr);

  return stats;
}

module.exports = {
  capitalize, 
  reverse, 
  calculator, 
  caesarCipher, 
  analyzeArray
};