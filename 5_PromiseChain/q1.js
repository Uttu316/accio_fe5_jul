const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("A");
  }, 3000);
});
p.then((v) => {
  console.log(v); // A
})
  .then((v) => {
    console.log(v); // undefined
    return v + "C";
  })
  .then((v) => {
    console.log(v); // undefinedC
    throw v;
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err); //error
  });
