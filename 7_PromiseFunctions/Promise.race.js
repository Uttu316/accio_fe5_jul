const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("A");
  }, 1500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 3000);
});

const p = Promise.race([p1, p2, p3]);

p.then((values) => {
  console.log(values);
}).catch((err) => {
  console.log("Error", err);
});
