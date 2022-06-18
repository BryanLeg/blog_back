const express = require("express");
const app = express();
const cors = require("cors");

const posts = require("./routes/posts");
const login = require("./routes/login");
const auth = require("./routes/auth");

const PORT = 5000;

app.use(express.json());

app.use(cors());

app.set("trust proxy", 1);

app.use("/api/v1/posts", posts);
app.use("/api/v1/login", login);
app.use("/api/v1/auth", auth);

app.get("/", (req, res) => {
  res.end("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
