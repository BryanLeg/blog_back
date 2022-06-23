const express = require("express");
const app = express();

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const posts = require("./routes/posts");
const login = require("./routes/login");
const auth = require("./routes/auth");

const PORT = 5000;

app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(xss());

app.set("trust proxy", 1);

app.use("/api/v1/posts", posts);
app.use("/api/v1/login", login);
app.use("/api/v1/auth", auth);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);

app.get("/", (req, res) => {
  res.end("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
