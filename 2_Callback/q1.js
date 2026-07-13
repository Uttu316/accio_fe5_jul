var x = 20;
function abc(a, b, callback) {
  var y = 10;
  let x = y + a + b;
  let o = callback(y, x) + callback(b, x);
  return o;
}
function mul(p, q) {
  return p * q;
}

const ans = abc(4, 5, mul);

console.log(ans);
