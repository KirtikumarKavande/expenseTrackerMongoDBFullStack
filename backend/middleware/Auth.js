const jwt = require("jsonwebtoken");
const User = require("../models/auth");
const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = jwt.verify(token, process.env.JWT_KEY);
    User.findOne({email:user.email})
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: "false" });
  }
};

module.exports = { authenticate };
