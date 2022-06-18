const auth = (req, res) => {
  const userName = req.user.userName;

  res.send({ userName });
};

module.exports = auth;
