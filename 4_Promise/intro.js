console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    if (2 > 4) {
      resolve("Big");
    } else {
      reject("Small");
    }
  }, 2000);
});

p.finally(() => {
  console.log("Done");
})
  .then((v) => {
    console.log("success", v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
