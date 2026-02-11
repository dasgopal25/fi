const Booking = require("../models/Booking");

exports.demoPayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { paymentStatus: "Paid" },
      { new: true }
    );

    res.json({ message: "Payment Done (Demo)", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
