const express = require("express");
const auth = require("../middleware/auth");
const {
  createBooking,
  getUserBookings,
  getProviderBookings,
  acceptRejectBooking,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/create", auth, createBooking);

router.get("/user", auth, getUserBookings);
router.get("/provider", auth, getProviderBookings);

router.put("/status", auth, acceptRejectBooking);

module.exports = router;
