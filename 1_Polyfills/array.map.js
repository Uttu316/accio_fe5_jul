let array = [2, 4, 6, 1, 3, 4, 5, 8, 9, 12, 54, 23, 32];

Array.prototype.map = null; //assuming not present

//polyfill for map
// takes a callback as an parameter
// access the current array using this keyword
// create an output array
// loop the current array
// for every iteration invoke the callback function
// pass item,index,array in callback arguments
// store the return value of callback in output array
// after the loop return the output array

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let curr = this;
    let output = [];
    for (let i = 0; i < curr.length; i++) {
      let value = callback(curr[i], i, curr);
      output.push(value);
    }
    return output;
  };
}

const output = array.map((item, index) => {
  return item * index;
});

console.log(output);
