const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");

const authenticationMiddleware = require("../middleware/auth");

router.route("/").get(authenticationMiddleware, auth);

module.exports = router;
