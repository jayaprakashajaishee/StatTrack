require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization?.split(" ")[1];
  if (!authToken)
    return res.json({ status: 401, message: "NO-TOKEN" }).status(401);
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.send({ status: 400, message: err.message });

    req.user = user;
    next();
  });
};

module.exports = authenticate;
