const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    async (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length == 0) {
        res.send({ msg: "this email does not exist" });
      } else {
        const hachedPassword = result[0].password;
        const isMatch = await bcrypt.compare(password, hachedPassword);
        let msg = "connecting...";

        const userName = result[0].user_name;
        const id = new Date().getTime();

        const token = jwt.sign({ id, userName }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        if (!isMatch) {
          msg = "invalid credentials";
        }

        res.send({ isMatch, msg, token });
      }
    }
  );
};

module.exports = { login };
