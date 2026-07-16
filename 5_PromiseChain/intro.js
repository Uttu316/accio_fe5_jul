const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
});
console.log("start");
const p2 = p.then((v) => {
  console.log(v);
  return v + "B";
});

const p3 = p2.then((v) => {
  console.log(v);
  return v + "C";
});
const p4 = p3.then((v) => {
  console.log(v);
  return v + "V";
});

p4.then((v) => {
  console.log(v);
});
