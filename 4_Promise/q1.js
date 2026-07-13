console.log("A");

function getData() {
  console.log("B");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("C");
      if ("A" < "B") {
        resolve("Hey");
      } else {
        reject("Bye");
      }
    }, 3000);
  });
}

getData()
  .then((v) => {
    console.log(v);
  })
  .finally(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log(e);
  });
console.log("D");
