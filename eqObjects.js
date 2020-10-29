const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);

  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let keysArray1 = Object.keys(object1);
  let keysArray2 = Object.keys(object2);
  if (keysArray1.length === keysArray2.length) {
    for (let item of keysArray1) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        let checkArray1 = object1[item];
        let checkArray2 = object2[item];
        if ((checkArray1.length !== checkArray2.length) || !(eqArrays(checkArray1, checkArray2))) {
          return false;
        }
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);