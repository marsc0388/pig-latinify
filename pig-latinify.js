function pigLatinify(string) {
  if (!string || typeof string !== "string") {
    throw new InvalidInputException("Invalid string input!");
  }
  if (string === "Pig") {
    return "🐷";
  }
  const pigLatin = [];

  const words = string.split(" ");

  for (let word of words) {
    let endString = "ay";
    if (/[aeiou]/.test(word.charAt(0))) {
      endString = "w" + endString;
    }
    if (/([a-zA-Z])/.test(word)) {
      let startingPoint = word
        .split("")
        .findIndex((char) => /[aeiou]/.test(char));
      pigLatin.push(
        word.substring(startingPoint) +
          word.substring(0, startingPoint) +
          endString
      );
    } else {
      pigLatin.push(word);
    }
  }
  return pigLatin.join(" ");
}

module.exports = { pigLatinify };
