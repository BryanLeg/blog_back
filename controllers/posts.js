const db = require("../config/db");

const getAllPosts = (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
};

const createPosts = (req, res) => {
  const userName = req.body.user;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUE (?,?,?)",
    [title, text, userName],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.json(req.body);
};

const getPost = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM posts WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
};

const editPost = (req, res) => {
  const { title, text } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE posts SET title = ?, post_text = ? WHERE id = ?",
    [title, text, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
};

const deletePost = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  res.send();
};

const likePost = (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.end();
};

module.exports = {
  getAllPosts,
  createPosts,
  getPost,
  deletePost,
  likePost,
  editPost,
};
