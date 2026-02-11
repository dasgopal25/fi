const { createClient } = require("redis");

const RedisClient = createClient({
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

RedisClient.on("connect", () => console.log("Redis Connected"));
RedisClient.on("error", (err) => console.log("Redis Error:", err));

module.exports = RedisClient;
