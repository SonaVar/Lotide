const middle = function(array) {
  let output = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return output;
  } else if (array.length % 2 === 0) {
    let middle2 = Math.floor(array.length / 2);
    let middle1 = middle2 - 1 ;
    output.push(array[middle1], array[middle2]);
  } else if (array.length % 2 !== 0) {
    let index = Math.floor(array.length / 2);
    output.push(array[index]);
  }
  return output;
}

module.exports = middle;