const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET_CODE, { expiresIn: "7d" });
};

module.exports = generateToken;
