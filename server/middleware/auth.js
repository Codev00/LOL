const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/index");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const data = jwt.verify(token, config.jwt.key);
  try {
    const user = await User.findOne({ _id: data._id, "tokens.token": token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
