const captitalize = (str) => {
  const firstChar = str[0].toUpperCase();
  const convertedString = str.split("");
  const restOfArray = convertedString.filter(
    (char) => char !== firstChar.toLowerCase()
  );
  return [firstChar, ...restOfArray].join("");
};

module.exports = captitalize;
