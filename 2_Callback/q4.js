console.log("A");
function getUserData(username, onSuccess, onFailure) {
  console.log("B");
  setTimeout(() => {
    if (username === "ABC") {
      onSuccess({
        name: "ABC XYZ",
        age: 22,
        id: "32323232",
      });
    } else {
      onFailure("No user found");
    }
    console.log("C");
  }, 3000);
  console.log("D");
}

getUserData(
  "ABC",
  (userData) => {
    console.log(userData);
  },
  (err) => {
    console.log(err);
  },
);

console.log("E");
