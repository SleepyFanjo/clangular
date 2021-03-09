const randomString = (length, chars) => {
  let result = "";
  const charsLength = chars.length;

  while (length > 0) {
    result += chars[Math.floor(Math.random() * charsLength)];
    length--;
  }

  return result;
};

const randomCapitalString = (length) =>
  randomString(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

module.exports = {
  randomString,
  randomCapitalString,
};
