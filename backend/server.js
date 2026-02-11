const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const connectDB = require("./src/config/db");
const RedisClient = require("./src/config/redis");

const userRoutes = require("./src/routes/userRoutes");
const providerRoutes = require("./src/routes/providerRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const serviceRoutes = require("./src/routes/serviceRoutes");



const app = express();
const _dirname =path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/user", userRoutes);
app.use("/api/provider", providerRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/service", serviceRoutes);

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get("*",(_,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})


connectDB();

RedisClient.connect()
  .then(() => console.log("Redis Ready"))
  .catch((err) => console.log("Redis Connect Error:", err));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
