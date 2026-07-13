console.log("A");
function sum(a, b, cb) {
  let x = a - b;
  let y = a + b;
  let r = cb(x, y) + cb(y, x + a);
  console.log("B");
  return r;
}
console.log("C");
function magic(p, q) {
  console.log("D");
  return Math.max(p, q);
}

const o = sum(2, 3, magic);
console.log(o);
