require("dotenv").config();

module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT || 8080,
  SECRET_CODE: process.env.SECRET_CODE,
  NODE_ENV: process.env.NODE_ENV || "development",
};
