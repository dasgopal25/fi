const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
    amount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    paymentMode: { type: String, default: "Demo" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
