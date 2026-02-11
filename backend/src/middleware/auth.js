const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not Authorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_CODE);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = auth;
