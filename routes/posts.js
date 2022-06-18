const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  createPosts,
  getPost,
  deletePost,
  likePost,
  editPost,
} = require("../controllers/posts");

router.route("/").get(getAllPosts).post(createPosts);
router
  .route("/:id")
  .get(getPost)
  .delete(deletePost)
  .put(likePost)
  .patch(editPost);
module.exports = router;
