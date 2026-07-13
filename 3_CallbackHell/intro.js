function getUser(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username === "abc") {
      const user = {
        name: "ABC XYz",
        id: 32323232,
        age: 27,
      };
      onSuccess(user);
    } else {
      onFailure("Ooops no user");
    }
  }, 3000);
}

function getPost(userId, onSuccess, onFailure) {
  setTimeout(() => {
    if (userId) {
      onSuccess({
        caption: "Travelling to Japan",
        postId: "332387823232",
      });
    } else {
      onFailure("OOps no post");
    }
  }, 3000);
}

function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Great",
        commentId: 323898989,
      });
    } else {
      onFailure("Oops no comment");
    }
  }, 3000);
}

console.time("Start");
getUser(
  "abc",
  (user) => {
    console.log(user);
    getPost(
      user.id,
      (post) => {
        console.log(post);
        getComment(
          post.postId,
          (comment) => {
            console.log(comment);
            console.timeEnd("Start");
          },
          (err) => {
            console.log(err);
          },
        );
      },
      (err) => {
        console.log(err);
      },
    );
  },
  (err) => {
    console.log(err);
  },
);
