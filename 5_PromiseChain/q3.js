const getUserData = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "abc") {
        resolve("A");
      } else {
        reject("B");
      }
    }, 3000);
  });
};
const getPostData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve("C");
      } else {
        reject("D");
      }
    }, 3000);
  });
};
console.log("Start");
getUserData("abc")
  .then((userId) => {
    return getPostData(userId);
  })
  .then((postId) => {
    console.log(postId);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("End");
