let array = [2, 4, 6, 1, 3, 4, 5, 8, 9, 12, 54, 23, 32];

//evens
//write a polyfill of function evens, it should return an array with all even numbers

// create the evens function
// takes no argument
// assign it in Array.prototype
// access the current array using this keyword
// create an output array
//loop the current array and if the item is even
// store it in output array
// after the loop return the output array

Array.prototype.evens = function () {
  let curr = this;
  let output = [];
  for (let i = 0; i < curr.length; i++) {
    if (curr[i] % 2 === 0) {
      output.push(curr[i]);
    }
  }
  console.log(output);
};

array.output();
