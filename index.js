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

  return str;
}

module.exports = {capitalize, reverse};