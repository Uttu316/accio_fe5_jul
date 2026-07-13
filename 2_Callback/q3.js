//AGFEDCBH //AGHFEDCB
console.log("A");
setTimeout(() => {
  console.log("B");
}, 4000); //1s = 1000ms
setTimeout(() => {
  console.log("C");
}, 3000);
setTimeout(() => {
  console.log("D");
}, 2000);
setTimeout(() => {
  console.log("E");
}, 500);
setTimeout(() => {
  console.log("F");
}, 0);
setTimeout(() => {
  console.log("G");
});
console.log("H");
