console.log("A");
const getUserData = (username) => {
  return new Promise((res, reject) => {
    console.log("B");
    setTimeout(() => {
      if (username === "abc") {
        res("hey"); //push then in micro task queue with value hey
      } else {
        reject("Bye");
      }
      console.log("C");
    }, 3000);
    console.log("D");
  });
};

getUserData("abc")
  .then((v) => {
    console.log(v); //hey
    return v + "1";
  })
  .then((v) => {
    console.log(v); //hey1
    return v + "2";
  })
  .then((v) => {
    console.log(v); //hey12
    throw v;
  })
  .then((v) => {
    console.log(v);
    return v + "3";
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("End");
