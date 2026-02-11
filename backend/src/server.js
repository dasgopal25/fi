const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();


const connectDB = require("./config/db");
const RedisClient = require("./config/redis");

const userRoutes = require("./routes/userRoutes");
const providerRoutes = require("./routes/providerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const serviceRoutes = require("./routes/serviceRoutes");



const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/provider", providerRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/service", serviceRoutes);

app.get("/", (req, res) => {
  res.send("Fixxo Backend Running...");
});

connectDB();

RedisClient.connect()
  .then(() => console.log("Redis Ready"))
  .catch((err) => console.log("Redis Connect Error:", err));

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port " + process.env.PORT);
});
