const tail = function(array) {
  let newArray = [];
  for (let i = 1; i <= array.length; i ++) {
    newArray.push(array[i]);
  }
};


module.exports = tail;