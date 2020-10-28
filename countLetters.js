const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);

  }
};

const countLetters = function(text) {
  let textObject = {};
  for (let char of text) {
    if (char !== ' ') {
      if (textObject[char]) {
        textObject[char] += 1;
      } else {
        textObject[char] = 1;
      }
    }
  }
  return textObject;
};

console.log(countLetters("lighthouse in the house"));