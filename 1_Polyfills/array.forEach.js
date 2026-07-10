let array = [2, 4, 6, 1, 3, 4, 5, 8, 9, 12, 54, 23, 32];

Array.prototype.forEach = null; //assuming not present

//polyfill for forEach
// takes a callback as an parameter
// access the current array using this keyword
// loop the current array
// for every iteration invoke the callback function
// pass item,index,array in callback arguments

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let curr = this;
    for (let i = 0; i < curr.length; i++) {
      callback(curr[i], i, curr);
    }
  };
}

array.forEach((item, index) => {
  console.log(item, index);
});
