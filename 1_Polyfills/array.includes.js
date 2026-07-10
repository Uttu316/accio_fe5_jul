let array = ["A", "B", "C", "D"];

//polyfill for includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (target) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  };
}
let isPresent = array.includes("C");
console.log(isPresent);
